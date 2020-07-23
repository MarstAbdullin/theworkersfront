<template>
    <div class="container">
        <div class="form-group">
            <form name="form" @submit.prevent="saveInfo">
                <label for="resumeName">Название резюме:</label>
                <input
                        v-model="resume.resumeName"
                        type="text"
                        class="form-control"
                        name="resumeName"
                />
                <label for="age">Возраст:</label>
                <input
                        v-model="resume.age"
                        type="number"
                        class="form-control"
                        name="age"
                />
                <label for="sex">Пол:</label>
                <p></p>
                <label>М</label>
                <input
                        v-model="resume.sex"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="sex"
                /><label>Ж</label>
                <input
                        v-model="resume.sex"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="sex"
                />
                <label for="university">Специальность и вуз:</label>
                <input
                        v-model="resume.university"
                        type="text"
                        class="form-control"
                        name="university"
                />
                <label for="city">Город</label>
                <input
                        v-model="resume.city"
                        type="text"
                        class="form-control"
                        name="city"
                />
                <label for="citizenship">Гражданство:</label>
                <input
                        v-model="resume.citizenship"
                        type="text"
                        class="form-control"
                        name="citizenship"
                />
                <label for="readyToRelocation">Готов к переезду:</label>
                <p><label>Да</label></p>
                <input
                        v-model="resume.readyToRelocation"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="readyToRelocation"
                />
                <p><label>Нет</label></p>
                <input
                        v-model="resume.readyToRelocation"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="readyToRelocation"
                />
                <label for="workingExperience">Опыт работы:</label>
                <input
                        v-model="resume.workingExperience"
                        type="text"
                        class="form-control"
                        name="workingExperience"
                />
                <label for="workingInProject">Готов к работе только на один проект: </label>
                <p><label>Да</label></p>
                <input
                        v-model="resume.workingInProject"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="workingInProject"
                />
                <p><label>Нет</label></p>
                <input
                        v-model="resume.workingInProject"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="workingInProject"
                /> <label for="workingFulltime">Готов к работе на постоянку: </label>
                <p><label>Да</label></p>
                <input
                        v-model="resume.workingFulltime"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="workingFulltime"
                />
                <p><label>Нет</label></p>
                <input
                        v-model="resume.workingFulltime"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="workingFulltime"
                />
                <label for="description">Описание:</label>
                <input
                        v-model="resume.description"
                        type="text"
                        class="form-control"
                        name="description"
                />
                <label for="phoneNumber">Номер телефона:</label>
                <input
                        v-model="resume.phoneNumber"
                        type="text"
                        class="form-control"
                        name="phoneNumber"
                />
                <label for="email">Email:</label>
                <input
                        v-model="resume.email"
                        type="text"
                        class="form-control"
                        name="email"
                />
                <label for="languages">Знание языков:</label>
                <input
                        v-model="resume.languages"
                        type="text"
                        class="form-control"
                        name="languages"
                />
                <label for="careerObjective">Карьерные цели:</label>
                <input
                        v-model="resume.careerObjective"
                        type="text"
                        class="form-control"
                        name="careerObjective"
                />
                <div v-if="teachers.length">
                    <label for="teachers">Учитель</label>
                    <select v-model="resume.teacherId">
                        <option v-for="teacher in teachers" v-bind:value="teacher.id" v-bind:key="teacher.id">
                            {{teacher.firstName}} {{teacher.secondName}}
                        </option>
                    </select>
                    <span>Выбрано: {{resume.teacherId}}</span>
                </div>
                <p></p>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import UserService from '../services/user.service';
    import Resume from "@/models/resume";

    export default {
        name: 'Resume',
        data() {
            return {
                resume: new Resume('','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
                teachers: []
            };
        },
        methods: {
            saveInfo() {
                UserService.createResume(this.resume)
            }
        },
        mounted() {
            UserService.getTeachers().then(
                response => {
                    this.teachers = response.data;
                });
        }
    };
</script>