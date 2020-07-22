<template>
    <div class="container">
        <div class="form-group">
            <form name="form" @submit.prevent="saveInfo">
                <label for="firstName">Имя</label>
                <input
                        v-model="teacherInfo.firstName"
                        type="text"
                        class="form-control"
                        name="firstName"
                />
                <label for="secondName">Фамилия</label>
                <input
                        v-model="teacherInfo.secondName"
                        type="text"
                        class="form-control"
                        name="secondName"
                />
                <label for="workingExperience">Опыт работы</label>
                <input
                        v-model="teacherInfo.workingExperience"
                        type="text"
                        class="form-control"
                        name="workingExperience"
                />
                <label for="positionInUniversity">Позиция в университете</label>
                <input
                        v-model="teacherInfo.positionInUniversity"
                        type="text"
                        class="form-control"
                        name="positionInUniversity"
                />
                <div v-if="tags.length">
                    <label for="tags">Тэги</label>
                    <select v-model="teacherInfo.tags" multiple>
                        <option v-for="tag in tags" v-bind:key="tag.id">{{tag}}</option>
                    </select>
                    <span>Выбрано: {{teacherInfo.tags}}</span>
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
        name: 'TeacherInfo',
        data() {
            return {
                teacherInfo: '',
                userInfo: '',
                tags: [],
                teachers: [],
                id: this.$store.state.auth.user.id
            };
        },
        methods: {
            saveInfo() {
                UserService.changeTeacherProfile(this.teacherInfo)
            }
        },
        mounted() {
            UserService.getTeacherInfo(this.id).then(
                response => {
                    this.userInfo = response.data;
                    this.teacherInfo = this.userInfo;
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
        }
    };
</script>