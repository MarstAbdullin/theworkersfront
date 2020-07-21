<template>
    <div class="container">
        <header class="jumbotron">
            <div v-if="resume.confirmedByTeacher">
                <h3>Кто подтвердил: {{resume.teacherInfo.firstName}} {{resume.teacherInfo.secondName}}</h3>
            </div>
            <div v-else>
                <h3>Неподтверждённое резюме</h3>
            </div>
            <h3>Your student id: {{resume.id}}</h3>
            <!--<div class="card-img"><img :src="resume.photoPath" /></div>-->
            <h3>{{resume.student.firstName}} {{resume.student.secondName}}</h3>
            <div v-if="resume.age">
                <h4>{{resume.age}} лет</h4>
            </div>
            <div v-if="resume.sex">
                <h4>Пол: М</h4>
            </div>
            <div v-else>
                <h4>Пол: Ж</h4>
            </div>
            <div v-if="resume.workingInProject">
                <h4>Готов работать на один проект</h4>
            </div>
            <div v-else>
                <h4>Не готов работать на один проект</h4>
            </div>
            <div v-if="resume.workingFulltime">
                <h4>Готов работать на постоянку</h4>
            </div>
            <div v-else>
                <h4>Не готов работать на постоянку</h4>
            </div>
            <div v-if="resume.readyToRelocation">
                <h4>Готов переехать</h4>
            </div>
            <div v-else>
                <h4>Не готов переезжать</h4>
            </div>

            <div v-if="resume.certificates.length">
                <h5>Сертификаты:</h5>
                <ul>
                    <li v-for="obj in resume.certificates" v-bind:key="obj.id">{{obj}}</li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
    import UserService from '../services/user.service';

    export default {
        name: 'Resume',
        data() {
            return {
                resume: '',
                paramId: this.$store.state.auth.user.id,
                id: this.$route.params.id
            };
        },
        mounted() {
            UserService.getResume(this.id).then(
                response => {
                    this.resume = response.data;
                },
                error => {
                    this.resume =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
        }
    };
</script>