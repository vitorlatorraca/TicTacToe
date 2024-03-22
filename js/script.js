var jogada = 0
var gameover = {
    fim: false,
    ganhador: ''
}
var ce = [false, 'ce']
var cc = [false, 'cc']
var cd = [false, 'cd']
var me = [false, 'me']
var mc = [false, 'mc']
var md = [false, 'md']
var be = [false, 'be']
var bc = [false, 'bc']
var bd = [false, 'bd']
var v = document.getElementById('vez')
var lce = document.getElementById('ce')
var lcc = document.getElementById('cc')
var lcd = document.getElementById('cd')
var lme = document.getElementById('me')
var lmc = document.getElementById('mc')
var lmd = document.getElementById('md')
var lbe = document.getElementById('be')
var lbc = document.getElementById('bc')
var lbd = document.getElementById('bd')


function clicar(loc) {

if(gameover.fim == false){
    switch (loc) {
        case 'ce':

            if( ce[0] == false){
                if(jogada%2 == 0){
                    lce.style.backgroundImage = "url('img/o.png')"
                    ce[1] = 'o'
                }else{
                    lce.style.backgroundImage = "url('img/x.png')"
                    ce[1] = 'x'
                }
                jogada++
                vez()
                ce[0] = true
            }else{
                alert('Try other space')
            }


            break;
        case 'cc':

            if( cc[0] == false){
                if(jogada%2 == 0){
                    lcc.style.backgroundImage = "url('img/o.png')"
                    cc[1] = 'o'
                }else{
                    lcc.style.backgroundImage = "url('img/x.png')"
                    cc[1] = 'x'
                }
                jogada++
                vez()
                cc[0] = true
            }else{
                alert('Try other space')
            }

            break;
        case 'cd':

            if( cd[0] == false){
                if(jogada%2 == 0){
                    lcd.style.backgroundImage = "url('img/o.png')"
                    cd[1] = 'o'
                }else{
                    lcd.style.backgroundImage = "url('img/x.png')"
                    cd[1] = 'x'
                }
                jogada++
                vez()
                cd[0] = true
            }else{
                alert('Try other space')
            }

            break;
        case 'me':

            if( me[0] == false){
                if(jogada%2 == 0){
                    lme.style.backgroundImage = "url('img/o.png')"
                    me[1] = 'o'
                }else{
                    lme.style.backgroundImage = "url('img/x.png')"
                    me[1] = 'x'
                }
                jogada++
                vez()
                me[0] = true
            }else{
                alert('Try other space')
            }

            break;
        case 'mc':

            if( mc[0] == false){
                if(jogada%2 == 0){
                    lmc.style.backgroundImage = "url('img/o.png')"
                    mc[1] = 'o'
                }else{
                    lmc.style.backgroundImage = "url('img/x.png')"
                    mc[1] = 'x'
                }
                jogada++
                vez()
                mc[0] = true
            }else{
                alert('Try other space')
            }

            break;
        case 'md':
            
            if( md[0] == false){
                if(jogada%2 == 0){
                    lmd.style.backgroundImage = "url('img/o.png')"
                    md[1] = 'o'
                }else{
                    lmd.style.backgroundImage = "url('img/x.png')"
                    md[1] = 'x'
                }
                jogada++
                vez()
                md[0] = true
            }else{
                alert('Try other space')
            }

            break;
        case 'be':

            if( be[0] == false){
                if(jogada%2 == 0){
                    lbe.style.backgroundImage = "url('img/o.png')"
                    be[1] = 'o'
                }else{
                    lbe.style.backgroundImage = "url('img/x.png')"
                    be[1] = 'x'
                }
                jogada++
                vez()
                be[0] = true
            }else{
                alert('Try other space')
            }

            break;
        case 'bc':

            if( bc[0] == false){
                if(jogada%2 == 0){
                    lbc.style.backgroundImage = "url('img/o.png')"
                    bc[1] = 'o'
                }else{
                    lbc.style.backgroundImage = "url('img/x.png')"
                    bc[1] = 'x'
                }
                jogada++
                vez()
                bc[0] = true
            }else{
                alert('Try other space')
            }

            break;
        case 'bd':

            if( bd[0] == false){
                if(jogada%2 == 0){
                    lbd.style.backgroundImage = "url('img/o.png')"
                    bd[1] = 'o'
                }else{
                    lbd.style.backgroundImage = "url('img/x.png')"
                    bd[1] = 'x'
                }
                jogada++
                vez()
                bd[0] = true
            }else{
                alert('Try other space')
            }

            break;
    }

    }
}

function vez(y) {
    if(jogada%2 == 0){
        v.style.backgroundImage = "url('img/o.png')"
    }else{
        v.style.backgroundImage = "url('img/x.png')"
    }
    verfificar()
}

var linha = document.getElementById('linha')

function verfificar() {

    if(ce[1] == cc[1] && ce[1] == cd[1]){
        gameover.fim = true
    }else if(me[1] == mc[1] && mc[1] == md[1]){
        gameover.fim = true
    }else if(be[1] == bc[1] && bc[1] == bd[1]){
        gameover.fim = true
    }

    if(ce[1] == me[1] && me[1] == be[1]){
        gameover.fim = true
    }else if(cc[1] == mc[1] && mc[1] == bc[1]){
        gameover.fim = true
    }else if(cd[1] == md[1] && md[1] == bd[1]){
        gameover.fim = true
    }

    if(ce[1] == mc[1] && mc[1] == bd[1]){
        gameover.fim = true
    }else if(cd[1] == mc[1] && mc[1] == be[1]){
        gameover.fim = true
    }

    var resultadofinal = document.getElementById('res')
    var ganhador = document.getElementById('ganhador')

    if(gameover.fim == true){
        resultadofinal.innerHTML = `<h1>End of game!</h1>`
        if(jogada%2==0){
            //X - GANHOU
            ganhador.innerHTML = `
                <h1>Winner: <img src='img/x.png'></h1>
            `
        }else{
            //O - GANHOU
            ganhador.innerHTML = `
                <h1>Winner: <img src='img/o.png'></h1>
            `
        }
    }else if(jogada == 9){
        resultadofinal.innerHTML = `<h1>End of game!</h1>`
        ganhador.innerHTML = `<h1>It's a draw!</h1>`
    }

}