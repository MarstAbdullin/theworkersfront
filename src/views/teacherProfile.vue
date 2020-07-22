<template>
    <div class="container">
        <header class="jumbotron">
            <h3>Ваш преподавательский id: {{userInfo.id}}</h3>
            <!--<div class="card-img"><img :src="userInfo.photoPath" /></div>-->
            <h3>{{userInfo.firstName}} {{userInfo.secondName}}</h3>
            <div v-if="userInfo.workingExperience">
                <h4>Опыт работы: {{userInfo.workingExperience}}</h4>
            </div>
            <h4>{{userInfo.positionInUniversity}}</h4>
            <h5>email: {{userInfo.userDto.email}}</h5>
            <div v-if="userInfo.students.length">
                <h5>Ученики:</h5>
                <ul>
                    <li v-for="student in userInfo.students" v-bind:key="student.id">{{student.firstName}} {{student.secondName}}</li>
                </ul>
            </div>
            <div v-if="userInfo.tags.length">
                <h5>Тэги:</h5>
                <ul>
                    <li v-for="obj in userInfo.tags" v-bind:key="obj.id">{{obj}}</li>
                </ul>
            </div>
            <div v-if="userInfo.resumes.length && (paramId === userId)">
                <h5>Неподтверждённые резюме:</h5>
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
        name: 'TeacherInfo',
        data() {
            return {
                userInfo: '',
                userId: this.$store.state.auth.user.id,
                paramId: this.$route.params.id,
                resumes: []
            };
        },
        mounted() {
            UserService.getTeacherInfo(this.paramId).then(
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

            UserService.getUnconfirmedResumes(this.paramId).then(
                response => {
                    this.resumes = response.data;
                },
                error => {
                    this.resumes =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
        }
    };
</script>