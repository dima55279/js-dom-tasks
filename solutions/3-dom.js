// BEGIN
let body = document.body.innerHTML;
let newBody = "";
while (body.includes("."))
{
    newBody += '<p>' + body.slice(0, body.indexOf(".") + 1).trim() + '</p>';
    body = body.slice(body.indexOf(".") + 1);
}
document.body.innerHTML = newBody;
// END