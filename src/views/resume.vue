<template>
    <div class="container">
        <header class="jumbotron">
            <div v-if="resume.confirmedByTeacher">
                <h3>Id преподавателя который подтвердил данное резюме: {{resume.teacherId}}</h3>
            </div>
            <div v-else>
                <h3>Неподтверждённое резюме</h3>
                <button class="btn btn-primary" v-if="!(resume.studentId === paramId)" v-on:click="confirmResume">Подтвердить резюме</button>
            </div>
            <h3>id резюме: {{resume.id}}</h3>
            <h3>{{resume.resumeName}}</h3>

            <!--<div class="card-img"><img :src="resume.photoPath" /></div>-->
            <h3><a :href="'/studentProfile/' + resume.studentId">Профиль студента</a></h3>
            <div v-if="resume.age">
                <h4>{{resume.age}} лет</h4>
            </div>
            <div v-if="resume.sex">
                <h4>Пол: М</h4>
            </div>
            <div v-else>
                <h4>Пол: Ж</h4>
            </div>
            <h4>Учился в {{resume.university}}</h4>
            <h4>Живу в {{resume.city}}</h4>
            <h4>Гражданство: {{resume.citizenship}}</h4>
            <div v-if="resume.readyToRelocation">
                <h4>Готов переехать</h4>
            </div>
            <div v-else>
                <h4>Не готов переезжать</h4>
            </div>
            <h4>Опыт работы: {{resume.workingExperience}}</h4>
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
            <h5>Описание: {{resume.description}}</h5>
            <h4>Номер телефона: {{resume.phoneNumber}}</h4>
            <h4>Email: {{resume.email}}</h4>
            <h4>Карьерные цели: {{resume.careerObjective}}</h4>
            <h4>Владение языками и их уровень: {{resume.languages}}</h4>
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
                userId: this.$store.state.auth.user.id,
                paramId: this.$route.params.id
            };
        },
        methods: {
            confirmResume() {
                UserService.confirmResume(this.paramId)
            }
        },
        mounted() {
            UserService.getResume(this.paramId).then(
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