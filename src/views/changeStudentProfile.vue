<template>
    <div class="container">
        <div class="form-group">
            <form name="form" @submit.prevent="saveInfo">
                <label for="firstName">Имя</label>
                <input
                        v-model="studentInfo.firstName"
                        type="text"
                        class="form-control"
                        name="firstName"
                />
                <label for="secondName">Фамилия</label>
                <input
                        v-model="studentInfo.secondName"
                        type="text"
                        class="form-control"
                        name="secondName"
                />
                <label for="age">Возраст</label>
                <input
                        v-model="studentInfo.age"
                        type="number"
                        class="form-control"
                        name="age"
                />
                <label for="courseNumber">Номер курса</label>
                <input
                        v-model="studentInfo.courseNumber"
                        type="number"
                        class="form-control"
                        name="courseNumber"
                />
                <label for="specialty">Специальность и вуз</label>
                <input
                        v-model="studentInfo.specialty"
                        type="text"
                        class="form-control"
                        name="specialty"
                />
                <div v-if="tags.length">
                    <label for="tags">Тэги</label>
                    <select v-model="studentInfo.tags" multiple>
                        <option v-for="tag in tags" v-bind:key="tag.id">{{tag}}</option>
                    </select>
                    <span>Выбрано: {{studentInfo.tags}}</span>
                </div>
                <div v-if="teachers.length">
<!--                    <label for="teachers">Учителя</label>
                    <select v-model="studentInfo.teachers" multiple>
                        <option v-for="teacher in teachers" v-bind:key="teacher.id">{{teacher.firstName}}
                            {{teacher.secondName}}
                        </option>
                    </select>
                    <span>Выбрано: {{studentInfo.teachers}}</span>-->
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

    export default {
        name: 'StudentInfo',
        data() {
            return {
                studentInfo: '',
                userInfo: '',
                tags: [],
                teachers: [],
                id: this.$store.state.auth.user.id
            };
        },
        methods: {
            saveInfo() {
                UserService.changeStudentProfile(this.studentInfo)
            }
        },
        mounted() {
            UserService.getStudentInfo(this.id).then(
                response => {
                    this.userInfo = response.data;
                    this.studentInfo = this.userInfo;
                },
                error => {
                    this.userInfo =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
            UserService.getTags().then(
                response => {
                    this.tags = response.data;
                });
            UserService.getTeachers().then(
                response => {
                    this.teachers = response.data;
                });
        }
    };
</script>