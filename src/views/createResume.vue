<template>
    <div class="container">
        <div class="form-group">
            <form name="form" @submit.prevent="saveInfo">
                <label for="age">Возраст</label>
                <input
                        v-model="newResume.age"
                        type="number"
                        class="form-control"
                        name="age"
                />
                <label for="sex">Пол</label>
                <p></p>
                <label>М</label>
                <input
                        v-model="newResume.sex"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="sex"
                /><label>Ж</label>
                <input
                        v-model="newResume.sex"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="sex"
                />
                <label for="university">Специальность и вуз</label>
                <input
                        v-model="newResume.university"
                        type="text"
                        class="form-control"
                        name="university"
                />
                <label for="city">Город</label>
                <input
                        v-model="newResume.city"
                        type="text"
                        class="form-control"
                        name="city"
                />
                <label for="citizenship">Гражданство</label>
                <input
                        v-model="newResume.citizenship"
                        type="text"
                        class="form-control"
                        name="citizenship"
                />
                <label for="readyToRelocation">Готов к переезду</label>
                <p><label>Да</label></p>
                <input
                        v-model="newResume.readyToRelocation"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="readyToRelocation"
                /><p><label>Нет</label></p>
                <input
                        v-model="newResume.readyToRelocation"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="readyToRelocation"
                />
                <label for="workingExperience">Опыт работы</label>
                <input
                        v-model="newResume.workingExperience"
                        type="text"
                        class="form-control"
                        name="workingExperience"
                />
                <label for="workingInProject">Готов к работе только на один проект </label>
                <p><label>Да</label></p>
                <input
                        v-model="newResume.workingInProject"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="workingInProject"
                />
                <p><label>Нет</label></p>
                <input
                        v-model="newResume.workingInProject"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="workingInProject"
                />                <label for="workingFulltime">Готов к работе на постоянку </label>
                <p><label>Да</label></p>
                <input
                        v-model="newResume.workingFulltime"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="workingFulltime"
                />
                <p><label>Нет</label></p>
                <input
                        v-model="newResume.workingFulltime"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="workingFulltime"
                />
                <label for="description">Описание</label>
                <input
                        v-model="newResume.description"
                        type="text"
                        class="form-control"
                        name="description"
                />
                <label for="phoneNumber">Номер телефона</label>
                <input
                        v-model="newResume.phoneNumber"
                        type="text"
                        class="form-control"
                        name="phoneNumber"
                />
                <label for="email">Email</label>
                <input
                        v-model="newResume.email"
                        type="text"
                        class="form-control"
                        name="email"
                />
                <label for="languages">Знание языков</label>
                <input
                        v-model="newResume.languages"
                        type="text"
                        class="form-control"
                        name="languages"
                />
                <label for="careerObjective">Карьерные цели</label>
                <input
                        v-model="newResume.careerObjective"
                        type="text"
                        class="form-control"
                        name="careerObjective"
                />
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import UserService from '../services/user.service';

    export default {
        name: 'Resume',
        data() {
            return {
                newResume: '',
                studentId: this.$store.state.auth.user.id,
                paramId: this.$route.params.id,
            };
        },
        methods: {
            saveInfo() {
                UserService.createResume(this.newResume)
            }
        },
    };
</script>