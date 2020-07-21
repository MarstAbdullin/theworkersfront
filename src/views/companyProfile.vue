<template>
    <div class="container">
        <header class="jumbotron">
            <h3>Your company id: {{userInfo.id}}</h3>
            <!--<div class="card-img"><img :src="userInfo.photoPath" /></div>-->
            <h3>{{userInfo.companyName}}</h3>
            <div v-if="userInfo.address">
                <h5>{{userInfo.address}}</h5>
            </div>
            <h5>{{userInfo.phoneNumber}}</h5>
            <h5>email: {{userInfo.userDto.email}}</h5>
            <div v-if="userInfo.tags.length">
                <h5>Тэги:</h5>
                <ul>
                    <li v-for="obj in userInfo.tags" v-bind:key="obj.id">{{obj}}</li>
                </ul>
            </div>
            <div v-if="(paramId === id)">
                <h5>Отзывы:</h5>
                <ul>
                    <li v-for="obj in reviews" v-bind:key="obj.id">{{obj.review}}</li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
    import UserService from '../services/user.service';

    export default {
        name: 'CompanyInfo',
        data() {
            return {
                userInfo: '',
                paramId: this.$store.state.auth.user.id,
                id: this.$route.params.id,
                reviews: []
            };
        },
        mounted() {
            UserService.getCompanyInfo(this.id).then(
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

            UserService.getCompanyReviews(this.id).then(
                response => {
                    this.reviews = response.data;
                },
                error => {
                    this.reviews =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
        }
    };
</script>