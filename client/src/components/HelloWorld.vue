<template>
  <div class="container">
    <div class="jumbotron">
      <h1>Petani mangga</h1>
      <p>Tanam pohon mangga mu</p>
      <button type="button" name="button" @click="startGrow" class="btn btn-primary">Mulai tanam</button>
    </div>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Pohon mangga Anda</th>
          <th>Pertumbuhan Pohon Mangga</th>
          <th>Umur mangga</th>
        </tr>
      </thead>
      <tbody>
       <tr>
         <td class="test">
           <img src="../assets/mangga.jpg" class="img-responsive" alt="Responsive image">
         </td>
         <td>
           <div class="alert alert-dismissible alert-success">
             <p>{{status}}</p>
          </div>
         </td>
         <td>
           <div class="alert alert-dismissible alert-danger">
              <p>{{isDead}}</p>
            </div>
         </td>
       </tr>
     </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isDead: '',
      status: ''
    }
  },
  mounted: function () {
    this.getData()
  },
  methods: {
    ...mapActions([
      'start'
    ]),
    getData () {
      this.$db.on('value', (mango) => {
        this.status = mango.val().status
        this.isDead = mango.val().isDead
      })
    },
    startGrow () {
      this.$db.set({ isDead: '', status: '' })
      this.start()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
td.test {
  width: 265px;
}
</style>
