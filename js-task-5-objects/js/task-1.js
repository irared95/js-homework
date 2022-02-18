const user = {
    name: 'Ivan',
    age: '33',
    role: 'admin',
    length: function() {
        let counter = 0;
        for (let key in this) {
            ++counter;
        }
        console.log('keys number', counter)
    },
    checkPermission: function() {
        if (this.role === 'user') {
            alert('Access denied');
        }
        if (this.role === 'admin') {
            alert('Access granted');
        }

    }
}

const admin = {}
Object.assign(admin, user)
admin.role = 'user';

user.length();
admin.length();
user.checkPermission();
admin.checkPermission();

// console.log('user', user)
// console.log('admin', admin)