$(document).ready(function(){
    //setSession(sesId);
    // действия, которые необходимо выполнить после загрузки документа...
    var currentLocation = window.location;
    var currentReceipt = new URL(currentLocation).searchParams.get("id");

    if(currentReceipt != null)
    {
        fillReceiptPage(currentReceipt);
    }
    else
    {
        document.location.href = "/pages/not-found.html";
    }
    
    
});

async function fillReceiptPage(currentReceipt)
{
    var responseObject = await getReceiptById(currentReceipt);
    if(responseObject != null)
    {
        $("main").append(buildReceiptHeader(responseObject));
        $("main").append(buildReceiptDescription(responseObject));
        $("main").append(buildReceiptSteps(responseObject.directions));
    }

    else
    {

    }
}

function buildReceiptHeader(receiptContent)
{
    var headerString =`<div class="receipt-header">
    <h1>` + receiptContent.name + `</h1>
    <h2>` + receiptContent.description + `</h2>
</div>`;
    return headerString;
}

function buildReceiptDescription(receiptContent)
{
    var descriptionString = `<div class="receipt-description">
    <div class="receipt-img"></div>

    <div class="receipt-parameters">
        ` + countDuratuon(receiptContent.cookingDuration) +`
        <div class="receipt-portions">
            <p>` + receiptContent.portionNumber +` порции</p>
        </div>
    </div>

    <div class="receipt-ingridients">
        ` + buildReceiptIngredients(receiptContent.ingredients) + `
    </div>
</div>`;

    return descriptionString;
}

function countDuratuon(duration)
{
    var dClass = "";
    var content = "";
    if(duration <= 60)
    {
        dClass = "fast"
        var min = duration - 15;
        var max = duration + 15;
        content = min + "-" + max + " минут";
    }
    else if(duration < 180)
    {
        dClass = "medium";
        var min = Math.floor(duration / 60);
        var max = min + 1;
        content = min + "-" + max + " часа";
    }
    else{
        dClass = "long";
        var min = Math.floor(duration / 60);
        var max = min + 1;
        content = min + "-" + max + " часа";
    }

    return `<div class="receipt-duration ` + dClass +`">
    <p>` + content +`</p>
</div>`;
}

function buildReceiptIngredients(ingredients)
{
    var result = "";
    for (let i = 0; i < ingredients.length; i++) {
        const ingredient = ingredients[i];
        result += `<div class="receipt-ingridient">
        <p>` + ingredient + `</p>
    </div>
    `;
    }
    return result;
}

function buildReceiptSteps(steps)
{
    var stepsStr = "";
    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        stepsStr += `<div class="receipt-step">
        <h3>` + (i + 1) + `.</h3>
        <p>` + step + `</p>
    </div>
    `;
    }

    return `<div class="receipt-steps">
    ` + stepsStr + `
</div>`;
}