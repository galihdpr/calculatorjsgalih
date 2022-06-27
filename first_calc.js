// misalkan kalkulator berhasil menarik inputan seperti ini
let numArr;
let opsArr;
let hasilHitung;

numArr = (display)=>{
    return display.split(/[+\-x/]/gi).map(parseFloat);
}
opsArr = (display)=>{
    return display.match(/[+\-x/]/gi);
}

let calcuFunc = (a,b)=>{
    if(b.includes('x') || b.includes('/')){
        while(b.includes('x') || b.includes('/')){
            if(b.includes('x')){
                hasilHitung = a[b.indexOf('x')] * a[b.indexOf('x')+1];
                a.splice(b.indexOf('x'),2,hasilHitung);
                b.splice(b.indexOf('x'),1);
            }else if(b.includes('/')){
                hasilHitung = a[b.indexOf('/')] / a[b.indexOf('/')+1];
                a.splice(b.indexOf('/'),2,hasilHitung);
                b.splice(b.indexOf('/'),1);
            }
            if(b.includes('x') ===false && b.includes('/')===false){
                if(b.includes('+')||b.includes('-')){
                    for(let i = 0; i<b.length;i++){
                        if(b[i]==='+'){
                            hasilHitung = a[i] + a[i + 1];
                            a.splice(i+1,1,hasilHitung);
                        }else if(b[i] === '-'){
                            hasilHitung = a[i] - a[i + 1];
                            a.splice(i+1,1,hasilHitung);
                        }
                    }
                }
            }
        }
    }else if(b.includes('x') ===false && b.includes('/')===false){
        if(b.includes('+')||b.includes('-')){
            for(let i = 0; i<b.length;i++){
                if(b[i]==='+'){
                    hasilHitung = a[i] + a[i + 1];
                    a.splice(i+1,1,hasilHitung);
                }else if(b[i] === '-'){
                    hasilHitung = a[i] - a[i + 1];
                    a.splice(i+1,1,hasilHitung);
                }
            }
        }
    }
    return hasilHitung;
}



let dispCal = '1+3+4x4/2';



let lastIndexOps = (display)=>{
    let opr = opsArr(display);
    let lastOpr;
    for(i of opr){
        lastOpr = 0;
        lastOpr = display.lastIndexOf(i) +1;
    }
    return lastOpr;
}


let percentReplace = (display)=>{
    let opsIndex = lastIndexOps(display);
    let angNum = numArr(display);
    let lastNum = angNum[angNum.length-1]/100;
    let replace = display.slice(0,opsIndex) + String(lastNum);
    return replace;
}


let backFunc = (display)=>{
    return display.slice(0,display.length-1);
}



