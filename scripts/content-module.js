async function getReceiptById(receiptID)
{
    let url = apiLink + '/api/recipe/' + receiptID;

    let response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
    });
      
    if (response.ok)
    {
        let result = await response.json();
        return result;
    }

    return null;
}