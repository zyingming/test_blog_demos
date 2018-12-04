// test
import {SingleA} from '@/test/singleA';
import {SingleB} from '@/test/singleB';

export class Test {
    constructor() {
        this.singleA = SingleA.getInstance(3);
        this.singleB = SingleB.getInstance();

        this.add();
    }
    add() {
        console.log('add')
        SingleA.getInstance(3).size = false;
    }
}

