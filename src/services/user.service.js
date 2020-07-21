import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/';

class UserService {
    getProfile() {
        return axios.get(API_URL + 'profile', { headers: authHeader() });
    }

    getStudentInfo(id) {
        return axios.get(API_URL + 'studentProfile/' + id, { headers: authHeader() });
    }

    getCompanyInfo(id) {
        return axios.get(API_URL + 'companyProfile/' + id, { headers: authHeader() });
    }

    getTeacherInfo(id) {
        return axios.get(API_URL + 'teacherProfile/' + id, { headers: authHeader() });
    }

    getResume(id) {
        return axios.get(API_URL + 'resume/' + id, { headers: authHeader() });
    }

    getTags() {
        return axios.get(API_URL + 'tags', { headers: authHeader() });
    }

    getTeachers() {
        return axios.get(API_URL + 'teachers', { headers: authHeader() });
    }

    getUnconfirmedResumes() {
        return axios.get((API_URL + 'unconfirmed'), { headers: authHeader() });
    }

    getCompanyReviews(id) {
        return axios.get((API_URL + '/company/' + id +'/reviews'), { headers: authHeader() });
    }

    changeStudentProfile(studentInfoDto) {
        return axios.post(API_URL + 'studentProfile', {
            firstName: studentInfoDto.firstName,
            secondName: studentInfoDto.secondName,
            age: studentInfoDto.age,
            specialty: studentInfoDto.specialty,
            courseNumber: studentInfoDto.courseNumber,
            tags: studentInfoDto.tags,
            teachers: studentInfoDto.teachers
        }, { headers: authHeader() });
    }

    changeCompanyProfile(companyInfoDto) {
        return axios.post(API_URL + 'companyProfile', {
            companyName: companyInfoDto.companyName,
            address: companyInfoDto.address,
            phoneNumber: companyInfoDto.phoneNumber,
            tags: companyInfoDto.tags
        }, { headers: authHeader() });
    }

    changeTeacherProfile(teacherInfoDto) {
        return axios.post(API_URL + 'teacherProfile', {
            id: teacherInfoDto.id,
            firstName: teacherInfoDto.firstName,
            secondName: teacherInfoDto.secondName,
            positionInUniversity: teacherInfoDto.positionInUniversity,
            workingExperience: teacherInfoDto.workingExperience,
            userDto: teacherInfoDto.userDto,
            students: teacherInfoDto.students,
            tags: teacherInfoDto.tags,
        }, { headers: authHeader() });
    }
}

export default new UserService();