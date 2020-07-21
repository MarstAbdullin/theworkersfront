<template>
    <div class="container">
        <div class="form-group">
            <form name="form" @submit.prevent="saveInfo">
                <label for="companyName">Company Name</label>
                <input
                        v-model="companyInfo.companyName"
                        type="text"
                        class="form-control"
                        name="firstName"
                />
                <label for="address">Address</label>
                <input
                        v-model="companyInfo.address"
                        type="text"
                        class="form-control"
                        name="address"
                />
                <label for="phoneNumber">Phone number</label>
                <input
                        v-model="companyInfo.phoneNumber"
                        type="text"
                        class="form-control"
                        name="age"
                />
                <label for="tags">Tags</label>
                <select v-model="companyInfo.tags">
                    <option v-for="tag in tags" v-bind:key="tag.id">{{tag}}</option>
                </select>
                <span>Выбрано: {{companyInfo.tags}}</span>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Save</button>
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
                companyInfo: '',
                userInfo: '',
                tags: [],
                teachers: [],
                id: this.$store.state.auth.user.id
            };
        },
        methods: {
            saveInfo() {
                UserService.changeCompanyProfile(this.companyInfo)
            }
        },
        mounted() {
            UserService.getCompanyInfo(this.id).then(
                response => {
                    this.userInfo = response.data;
                    this.companyInfo = this.userInfo;
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