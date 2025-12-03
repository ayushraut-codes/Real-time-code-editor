function run() {
    let html = document.getElementById("htmlCode").value;
    let css = "<style>" + document.getElementById("cssCode").value + "</style>";
    let js = document.getElementById("jsCode").value;

    let output = document.getElementById("output").contentWindow.document;
    output.open();
    output.write(html + css + "<script>" + js + "</script>");
    output.close();
}
