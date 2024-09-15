<template>
  <div>
    <div class="form-container container">
      <ValidationObserver ref="form">
        <form id="registration-form" @submit.prevent="submitHandler">
          <h2>Personal Form</h2>
          <ValidationProvider v-slot="{ errors }" rules="required">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" v-model="formData.name" />
            <span class="message-error">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            ref="provider"
            v-slot="{ errors }"
            rules="required"
          >
            <label for="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              v-model="formData.address"
            />
            <span class="message-error">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            ref="provider"
            v-slot="{ errors }"
            rules="required"
          >
            <label for="phone">Phone Number:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              v-model="formData.phone"
            />
            <span class="message-error">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            ref="provider"
            v-slot="{ errors }"
            rules="email|required"
          >
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value="shiva@gmail.com"
              v-model="formData.email"
            />
            <span class="message-error">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidiationProvider
            ref="provider"
            v-slot="{ errors }"
            rules="required"
          >
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              v-model="formData.password"
            />
            <span class="message-error">{{ errors[0] }}</span>
          </ValidiationProvider>

          <ValidationProvider
            ref="provider"
            v-slot="{ errors }"
            rules="required"
          >
            <label for="zip">Zip Code:</label>
            <input type="number" id="zip" name="zip" v-model="formData.zip" />
            <span class="message-error">{{ errors[0] }}</span>
          </ValidationProvider>

          <button type="submit" id="btn-submit">
            {{ isEdit ? "Update" : "Submit" }}
          </button>
        </form>
      </ValidationObserver>
    </div>
    <MyTable
      :informations="submittedData"
      @edit="editHandler"
      @delete="deleteHandler"
    />
  </div>
</template>

<script>
import MyTable from "./MyTable.vue";

export default {
  name: "MyForm",
  components: {
    MyTable,
  },
  data() {
    return {
      formData: {
        name: "",
        address: "",
        phone: "",
        email: "",
        password: "",
        zip: "",
      },
      submittedData: JSON.parse(localStorage.getItem("Informations")) || [],
      isEdit: false,
      editIndex: null,
    };
  },
  props: {},
  methods: {
    saveToLocalStorage() {
      localStorage.setItem("Informations", JSON.stringify(this.submittedData));
    },

    editHandler(index) {
      this.formData = { ...this.submittedData[index] };
      this.isEdit = true;
      this.editIndex = index;
    },
    deleteHandler(index) {
      this.submittedData.splice(index, 1);
      this.saveToLocalStorage();
    },
    submitHandler() {
      this.$refs.form.validate().then((valid) => {
        if (valid) {
          if (this.isEdit) {
            this.submittedData.splice(this.editIndex, 1, { ...this.formData });
            this.isEdit = false;
            this.editIndex = null;
          } else {
            this.submittedData.push({ ...this.formData });
          }
          this.saveToLocalStorage();

          this.formData = {
            name: "",
            address: "",
            phone: "",
            email: "",
            password: "",
            zip: "",
          };
          this.$refs.form.reset();
        } else {
          console.log("Form is not valid");
        }
      });
    },
  },
};
</script>

<style scoped>
.form-container {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

label {
  margin: 10px 0 5px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 20px;
}

button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
}

button:hover {
  background-color: #218838;
}
.message-error {
  color: red;
  margin-top: -20px;
  display: block;
}
</style>
