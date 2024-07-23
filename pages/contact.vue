<template>
  <div class="min-h-screen font-open-sans">
    <PageTitle :title="title" />
    <div class="mb-4">
      <UForm
        :validate="validateForm"
        :state="state"
        :schema="contactSchema"
        @submit="sendMessage"
      >
        <div
          class="grid grid-flow-row md:grid-flow-col items-center m-8 gap-6 md:gap-24"
        >
          <UFormGroup name="name" label="Name" size="lg" required>
            <UInput
              v-model="state.senderName"
              variant="outline"
              :ui="{ color: 'indigo' }"
            />
          </UFormGroup>
          <UFormGroup name="email" label="Email" size="lg" required>
            <UInput
              v-model="state.senderEmail"
              placeholder="email@gmail.com"
              variant="outline"
              :ui="{ color: 'indigo' }"
            />
          </UFormGroup>
        </div>
        <div class="items-center m-8">
          <UFormGroup name="textarea" label="Message" size="lg" required>
            <UTextarea
              v-model="state.senderMessage"
              variant="outline"
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
  </div>
</template>

<script setup lang="ts">
import PageTitle from "../components/PageTitle.vue";

import type { FormError, FormSubmitEvent } from "#ui/types";
import { z } from "zod";

const toast = useToast();

const contactSchema = z.object({
  senderName: z.string(),
  senderEmail: z.string().email(),
  senderMessage: z.string(),
});

type ContactSchema = z.output<typeof contactSchema>;

const state = reactive({
  senderName: "",
  senderEmail: "",
  senderMessage: "",
});

const mail = useMail();
const title = "Contact";

const sendMessage = async (event: FormSubmitEvent<ContactSchema>) => {
  try {
    await mail.send({
      from: event.data.senderEmail,
      subject: event.data.senderName,
      text: event.data.senderMessage,
    });
    addNotification();
    resetForm();
  } catch (error) {
    console.error("Failed to send message", error);
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

const validateForm = (state: ContactSchema): FormError[] => {
  const errors = [];
  if (!state.senderName) {
    errors.push({ path: "name", message: "Name required" });
  }
  if (!state.senderEmail) {
    errors.push({ path: "email", message: "Email required" });
  }
  if (!state.senderMessage) {
    errors.push({ path: "textarea", message: "Message required" });
  }
  return errors;
};
</script>

<script lang="ts">
export default {
  name: "Contact",
  components: { PageTitle },
};
</script>
