<script setup lang="ts">
import type { PropType } from 'vue'
import type { Field } from '../../types/contact'
const alpine = useAppConfig().alpine

const { FORMSPREE_URL } = useRuntimeConfig().public

if (!FORMSPREE_URL) {
  console.warn('❌ Nenhum token "FORMSPREE_URL" foi dado, o formulário NÃO vai funcionar!')
}

const status = ref()

const props = defineProps({
  submitButtonText: {
    type: String,
    default: '✉️ Enviar mensagem'
  },
  fields: {
    type: Array as PropType<Field[]>,
    default: () => [
      {
        type: 'text',
        model: 'name',
        name: 'Nome',
        placeholder: 'Seu nome...',
        required: true,
        layout: 'default'
      },
      {
        type: 'email',
        model: 'email',
        name: 'Email',
        placeholder: 'Seu e-mail...',
        required: true,
        layout: 'default'
      },
      {
        type: 'text',
        model: 'text',
        name: 'Assunto',
        required: false,
        layout: 'default'
      },
      {
        type: 'textarea',
        model: 'message',
        name: 'Mensagem',
        placeholder: 'Sua mensagem...',
        required: true,
        layout: 'big'
      }
    ]
  }
})

const form = reactive(props.fields.map(v => ({ ...v, data: '' })))

const onSend = async (e: any) => {
  e.preventDefault()
  const data = new FormData(e.target)

  status.value = 'Enviando...'

  fetch(e.target.action, {
    method: e.target.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.value = alpine.form.successMessage
      e.target.reset()
    } else {
      // Handle errors from API
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.value = data["errors"][0].message
          console.error(data["errors"].map((error: any) => error["message"]).join(", "))
          setTimeout(() => {
            status.value = 'Enviar mensagem'
          }, 2000)
        } else {
          console.error("Houve um problema enviando seu formulário! Caso esse problema persista contate uranink@solyn.xyz ou abra um issue no Github!")
        }
      })
    }
  }).catch(() => {
    // Catch all other errors
    console.error("Houve um problema enviando seu formulário! Caso esse problema persista contate uranink@solyn.xyz ou abra um issue no Github!")
  })
}

</script>

<template>
  <form class="contact-form" method="POST" :action="FORMSPREE_URL" @submit="onSend">
    <div class="inputs">
      <Input v-for="(field, index) in form" :key="index" v-model="field.data" :field="field" />
    </div>
    <div>
      <Button type="submit" :disabled="!FORMSPREE_URL">
        {{ status ? status : submitButtonText }}
      </Button>
    </div>
  </form>
</template>

<style scoped lang="ts">
css({
  '.contact-form': {
    '.inputs': {
      display: 'grid',
      gridAutoFlow: 'row',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.8}',
      marginBottom: '{space.8}',
      maxWidth: '{size.md}'
    }
  }
})
</style>
