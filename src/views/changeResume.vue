<template>
    <div class="container">
        <div class="form-group">
            <form v-if="newResume.student.id === studentId" name="form" @submit.prevent="saveInfo">
                <label for="age">Возраст</label>
                <input
                        v-model="newResume.age"
                        type="number"
                        class="form-control"
                        name="age"
                />
                <label for="sex">Пол</label>
                <input
                        v-model="newResume.sex"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="sex"
                /><label>М</label>
                <input
                        v-model="newResume.sex"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="sex"
                /><label>Ж</label>
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
                <input
                        v-model="newResume.readyToRelocation"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="readyToRelocation"
                /><label>Да</label>
                <input
                        v-model="newResume.readyToRelocation"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="readyToRelocation"
                /><label>Нет</label>
                <label for="workingExperience">Опыт работы</label>
                <input
                        v-model="newResume.workingExperience"
                        type="text"
                        class="form-control"
                        name="workingExperience"
                />
                <label for="workingInProject">Готов к работе только на один проект </label>
                <input
                        v-model="newResume.workingInProject"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="workingInProject"
                /><label>Да</label>
                <input
                        v-model="newResume.workingInProject"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="workingInProject"
                /><label>Нет</label>
                <label for="workingFulltime">Готов к работе на постоянку </label>
                <input
                        v-model="newResume.workingFulltime"
                        v-bind:value="true"
                        type="radio"
                        class="form-control"
                        name="workingFulltime"
                /><label>Да</label>
                <input
                        v-model="newResume.workingFulltime"
                        v-bind:value="false"
                        type="radio"
                        class="form-control"
                        name="workingFulltime"
                /><label>Нет</label>
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
                <label for="phoneNumber">Номер телефона</label>
                <input
                        v-model="newResume.phoneNumber"
                        type="text"
                        class="form-control"
                        name="phoneNumber"
                />
                <label for="careerObjective">Карьерные цели</label>
                <input
                        v-model="newResume.careerObjective"
                        type="text"
                        class="form-control"
                        name="careerObjective"
                />
                <div v-if="tags.length">
                    <label for="teachers">Учитель</label>
                    <select v-model="newResume.teacherId">
                        <option v-for="teacher in teachers" v-bind:value="teacher.id" v-bind:key="teacher.id">
                            {{teacher.firstName}} {{teacher.secondName}}
                        </option>
                    </select>
                    <span>Выбрано: {{newResume.teacherId}}</span>
                </div>
                <!--                <label for="certificates">Сертификаты</label>
                                <select v-model="newResume.certificates">
                                    <option v-for="certificate in newResume.certificates" v-bind:key="certificate.id">{{certificate}}</option>
                                </select>
                                <span>Выбрано: {{newResume.certificates}}</span>-->
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

    export default {
        name: 'Resume',
        data() {
            return {
                newResume: '',
                oldResume: '',
                studentId: this.$store.state.auth.user.id,
                paramId: this.$route.params.id,
            };
        },
        methods: {
            saveInfo() {
                UserService.changeResume(this.newResume)
            }
        },
        mounted() {
            UserService.getResume(this.id).then(
                response => {
                    this.oldResume = response.data;
                    this.newResume = this.oldResume;
                },
                error => {
                    this.oldResume =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
        }
    };
</script>