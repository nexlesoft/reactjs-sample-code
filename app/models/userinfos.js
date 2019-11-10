export const userInfoModel = {
  roles: [],
  username: '',
  firstName: '',
  lastName: '',
  get fullName() {
    if (this.firstName && this.lastName)
      return this.firstName + ' ' + this.lastName;
    else
      return '';
  },
};
