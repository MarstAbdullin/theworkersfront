<template>
    <div class="container">
        <header class="jumbotron">
            <h3>Ваш студенческий id: {{userInfo.id}}</h3>
<!--            <div class="card-img"><img :src="userInfo.photoPath" /></div>-->
            <h3>{{userInfo.firstName}} {{userInfo.secondName}}</h3>
            <div v-if="userInfo.age">
                <h4>{{userInfo.age}} лет</h4>
            </div>
            <h4>{{userInfo.courseNumber}} {{userInfo.specialty}}</h4>
            <h5>email: {{userInfo.userDto.email}}</h5>
            <div v-if="userInfo.teachers.length">
                <h5>Преподаватели:</h5>
                <ul>
                    <li v-for="teacher in userInfo.teachers" v-bind:key="teacher.id">{{teacher.firstName}} {{teacher.secondName}}</li>
                </ul>
            </div>
            <div v-if="userInfo.tags.length">
                <h5>Тэги:</h5>
                <ul>
                    <li v-for="obj in userInfo.tags" v-bind:key="obj.id">{{obj}}</li>
                </ul>
            </div>
            <div v-if="userInfo.resumes">
                <h5>Резюме:</h5>
                <ul>
                    <li v-for="obj in userInfo.resumes" v-bind:key="obj.id">{{obj}}</li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
    import UserService from '../services/user.service';

    export default {
        name: 'StudentInfo',
        data() {
            return {
                userInfo: '',
                userId: this.$store.state.auth.user.id,
                paramId: this.$route.params.id
            };
        },
        mounted() {
            UserService.getStudentInfo(this.paramId).then(
                response => {
                    this.userInfo = response.data;
                },
                error => {
                    this.userInfo =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
        }
    };
</script>