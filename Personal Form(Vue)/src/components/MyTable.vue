<template>
  <div>
    <div class="table-container" id="table-container">
      <h2 class="text-center mt-5 mb-4">Your submitted Data</h2>
      <table id="dataTable" class="table table-striped">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>

            <th>Zip Code</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody id="table-body">
          <tr
            v-if="informations.length < 1"
            class="text-center"
            style="column-span: 8"
          >
            No data found
          </tr>
          <tr v-for="(element, index) in informations" :key="index">
            <td>{{ index + 1 }}</td>
            <td id="table-name">{{ element.name }}</td>
            <td id="table-address">{{ element.address }}</td>
            <td id="table-number">{{ element.phone }}</td>
            <td id="table-email">{{ element.email }}</td>

            <td id="table-zip">{{ element.zip }}</td>
            <td>
              <button
                class="btn btn-warning btn-sm"
                @click="$emit('edit', index)"
              >
                Edit
              </button>
              <button
                style="margin-left: 10px"
                class="btn btn-danger btn-sm"
                @click="$emit('delete', index)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  props: {
    informations: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.table-container {
  width: 80%;
  margin: 20px auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 100px;
}

table,
th,
td {
  border: 1px solid #ccc;
}

th,
td {
  padding: 10px;
  text-align: left;
}
</style>
