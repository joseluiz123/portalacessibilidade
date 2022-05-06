//localStorage.setItem("tema", "black")

function fonte(e) {

    var elemento = $(".acessibilidade");
    var fonte = parseInt(elemento.css('font-size'));

    var body = $("body");
    const fonteNormal = parseInt(body.css('font-size'));


    if (e == 'a') {
        fonte++;
    }

    if (e == 'd') {
        fonte--;
    }

    if (e == 'n') {
        fonte = fonteNormal;
        $(".noticia")
            .css("text-align", "left")
            .css("font-size", "50px")
    }

    elemento.css("fontSize", fonte);

}

function contraste(contraste) {
   
    if (contraste == 'escuro') {
        localStorage.setItem("tema", "escuro")
    } else if (contraste == 'claro') {
        localStorage.setItem("tema", "claro")
    } else if (contraste == null) {
        valor_atual = localStorage.getItem("tema")
        localStorage.setItem("tema", valor_atual)
    }

    defineContraste()
}

function defineContraste() {
    var contraste_definido = localStorage.getItem("tema")
    //console.log(contraste_definido)
    
    if (contraste_definido == 'escuro') {
        //alert(contraste_definido)
        $("body")
            .css("background-color", "black")
            .css("color", "white")
            .css("transition", "background 0.4s linear");

        $(".acessibilidade")
            .css("color", "white")

        $(".noticia")
            .css("color", "white")

        $(".box_noticia")
            .css("background-color", "#1C1C1C")
            .css("color", "white");

        $(".atalhos")
            .css("background-color", "#1C1C1C")
            .css("color", "white");

        $(".table-active")
            .css("background-color", "#1C1C1C")
            .css("color", "white");

        $(".navbar-toggler")
            .css("background-color", "#B0C4DE")
            .css("color", "white")
            .css("border-color", "#0000CD");

        $("hr")
            .css("border-color", "white")
    }

    if (contraste_definido == 'claro') {
        //alert(contraste_definido)
        $("body")
            .css("background-color", "white")
            .css("color", "black");

        $(".acessibilidade")
            .css("color", "black")

        $(".noticia")
            .css("color", "black")

        $(".box_noticia")
            .css("color", "white")
            .css("background-color", "#e9ecef");

        $(".atalhos")
            .css("color", "white")
            .css("background-color", "#e9ecef");

        $(".table-active")
            .css("background-color", "#e9ecef")
            .css("color", "black");

        $(".navbar-toggler") // botÃ£o de mostra menu quando a pÃ¡gina estÃ¡ em telas menores
            .css("background-color", "")
            .css("color", "")
            .css("border-color", "");

        $("hr")
            .css("border-color", "black")

        $("img-thumbnail")
            .css("color", "black")
            .css("border-color", "black")
            .css("solid", "green");
    }
}



defineContraste()


/* aumentar imagem ao passar mouse */
function bigImg(x) {
    x.style.height = "400px";
    x.style.width = "490px";
}

function normalImg(x) {
    x.style.height = "250px";  // altura
    x.style.width = "340px"; // largura
}



/* FunÃ§Ã£o para dar efeito de aumentar e diminuir imagem ao passar mouse 
function aumenta(obj){
    obj.height=obj.height*2;
    obj.width=obj.width*2;
}
 
function diminui(obj){
    obj.height=obj.height/2;
    obj.width=obj.width/2;
}
*/



/* Criar cookie */
/* $(document).ready(function () {

    // atribui o LS a uma vaviÃ¡vel
    var cookie = localStorage.getItem("banner");

    // verifica o cookie
    criaCookie();

    $(".gotit A").click(function () {
        $(".gotit").fadeToggle("slow");
        criaCookie(true);
    });

    function criaCookie(a) {

        if (a) {
            // cria o LS
            localStorage.setItem("banner", null);
        } else if (!cookie) {
            $(".gotit").show();
        }

    }

});
 */