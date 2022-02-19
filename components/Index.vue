<script setup lang="ts">

interface Book {
  title: string;
  author: string;
  year?: number;
  id: number;
}

const props = defineProps({
  book: {
    type: Object as PropType<Book>,
    default: () => ({
      validator: (book: Book) => !!book.title,
    }),
  },
  message: { type: String, required: true },
});

const emits = defineEmits<{
  (eventName: "bookUpdate", title: string, author: string, id: number): void;
}>();

/* const books = reactive<Book[]>({
    { title: "Nuxt 3 Guide", author: "Zach", year: "2022", id: 1 },
    { title: "Vue 3 Guide", author: "Zach E", year: "2022", id: 2 },
    { title: "Prisma Guide", author: "Zachary", year: "2022", id: 3 },
    { title: "Postgres Guide", author: "Zachariah", year: "2022", id: 4 },
}) as Book; */

const result = props.message.split("");
const filtered = props.message.filter((p) => p.value);

/* const inputValue = computed(() => {
    get() { return this.book },
    set(value) { this.$emit('update:bookUpdate', value) }
}) */

const handleChange = (evt) => {
  console.log((evt.target as HTMLInputElement).value);
};
</script>

<template>
  <div>
    <!-- <input type="text" v-model="books.title" @change="handleChange" /> -->
  </div>
</template>
