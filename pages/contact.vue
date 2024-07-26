<template>
  <div class="min-h-screen font-open-sans">
    <PageTitle :title="title" />
    <UForm
      :validate="validateForm"
      :state="state"
      :schema="contactSchema"
      @submit="handleSubmit"
    >
      <div
        class="grid grid-flow-row md:grid-flow-col items-center m-8 gap-6 md:gap-24"
      >
        <UFormGroup
          name="name"
          label="Name"
          size="lg"
          aria-label="Name"
          required
        >
          <UInput
            v-model="state.senderName"
            variant="outline"
            :ui="{ color: 'indigo' }"
          />
        </UFormGroup>
        <UFormGroup
          name="email"
          label="Email"
          size="lg"
          aria-label="Email"
          required
        >
          <UInput
            v-model="state.senderEmail"
            placeholder="email@gmail.com"
            variant="outline"
            :ui="{ color: 'indigo' }"
          />
        </UFormGroup>
      </div>
      <div class="items-center m-8">
        <UFormGroup
          name="message"
          label="Message"
          size="lg"
          aria-label="Message"
          required
        >
          <UTextarea
            v-model="state.senderMessage"
            variant="outline"
            placeholder="Say Hi!"
            :ui="{ color: 'indigo' }"
            :rows="8"
            :maxrows="12"
            autoresize
          />
        </UFormGroup>
      </div>
      <div class="flex justify-center">
        <button
          class="px-8 p-2 bg-blue-800/80 rounded-md text-white"
          type="submit"
          aria-label="Send"
          :disabled="!validateForm"
          :class="{
            'opacity-50': !validateForm,
            'hover:bg-blue-800/60': validateForm,
          }"
        >
          Send
        </button>
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import PageTitle from "../components/PageTitle.vue";
import type { FormError, FormSubmitEvent } from "#ui/types";
import { contactSchema, type ContactSchema } from "../types/contactSchema";

const toast = useToast();
const mail = useMail();
const title = "Contact";

const state = reactive({
  senderName: "",
  senderEmail: "",
  senderMessage: "",
});

const varToType = {
  senderName: "Name",
  senderEmail: "Email",
  senderMessage: "Message",
};

const validateForm = (state: ContactSchema): FormError[] => {
  const errors: FormError[] = [];
  const validation = contactSchema.safeParse(state);

  if (!validation.success) {
    validation.error.errors.forEach((error) => {
      const inputType = varToType[error.path[0] as keyof typeof varToType];
      errors.push({
        path: inputType.toLowerCase(),
        message: `${inputType} required`,
      });
    });
  }
  return errors;
};

const handleSubmit = async (event: FormSubmitEvent<ContactSchema>) => {
  try {
    await mail.send({
      from: event.data.senderEmail,
      subject: event.data.senderName,
      text: event.data.senderMessage,
    });
    addNotification();
    resetForm();
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to send message: ${(error as Error).message}`,
    });
  }
};

const addNotification = () => {
  toast.add({
    id: "message-sent",
    title: "Message sent",
    timeout: 5000,
    icon: "i-heroicons-check-circle",
  });
};

const resetForm = () => {
  state.senderName = "";
  state.senderEmail = "";
  state.senderMessage = "";
};
</script>

<script lang="ts">
export default {
  name: "Contact",
  components: { PageTitle },
};
</script>
