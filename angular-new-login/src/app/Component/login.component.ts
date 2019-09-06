import { Component} from '@angular/core'
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class login {
    constructor(private router: Router) {}

    login(userN, pass){

        let credentials = {
            userN: userN.value,
            pass: pass.value
        }

        if(localStorage.getItem("credentials") === null){
            localStorage.setItem("credentials", JSON.stringify(credentials))
        }else{
            credentials = JSON.parse(localStorage.getItem("credentials"));
        }

        if(userN.value === credentials.userN && pass.value == credentials.pass){
            //alert('You logged in!');
            this.router.navigate(["spa"])

        }else{
            alert('Invalid password or user name')
        }
        return false

        
    }

    get_user(){
        let credentials = JSON.parse(localStorage.getItem("credentials"));
        console.log(credentials);
    }
}