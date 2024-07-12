window.DEBUG = true;
window.$ = GeneratorJs();
window.$$ = GeneratorWebHelper();
$.init();
load("./script.js");

var style = `

.container{
    margin:0 4em;

}
#inputs { 
    width:calc(100% - 4em);
    display:flex;
    flex-direction:column;
    // padding:4em;
}
`

loadscss(style)

append(app,
    gen(div,
        "inputs",
        gen(h1,
            "heading",
            "Whatsapp Multi",
            'heading'),
            "container"
            )
        )
append(inputs,gen(h2,"","Send Multiple Whatsapp message with ease"))
append(inputs,gen("textarea","Message","","",{tyep:textarea,value:"message"}))

append(inputs,gen("textarea","numbers","1234567890, 1234567890, 1234567890","","",{tyep:textarea,value:"message",title:"10 digit mobile numbers"}))

append(inputs,gen("button","save","submit","","",{tyep:textarea,value:"message",title:"10 digit mobile numbers"}))

