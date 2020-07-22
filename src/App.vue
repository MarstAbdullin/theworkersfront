
<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent>TheWorkers</a>
     <div v-if="(currentUser) && (currentUser.role === 'STUDENT')" class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to=studentInfoLink class="nav-link">Мой профиль</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/changeStudentProfile" class="nav-link">Изменить профиль</router-link>
        </li>
         <li class="nav-item">
             <router-link to="/createResume" class="nav-link">Создать резюме</router-link>
         </li>
      </div>

      <div v-if="(currentUser) && (currentUser.role === 'COMPANY')" class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to=companyInfoLink class="nav-link">Профиль компании</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/changeCompanyProfile" class="nav-link">Изменить профиль компании</router-link>
        </li>
      </div>

      <div v-if="(currentUser) && (currentUser.role === 'TEACHER')" class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to=teacherInfoLink class="nav-link">Мой профиль</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/changeTeacherProfile" class="nav-link">Изменить профиль</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Register
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.email }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              companyInfoLink: '/companyProfile/' + this.$store.state.auth.user.id,
              studentInfoLink: '/studentProfile/' + this.$store.state.auth.user.id,
              teacherInfoLink: '/teacherProfile/' + this.$store.state.auth.user.id
          };
      },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  };
</script>
