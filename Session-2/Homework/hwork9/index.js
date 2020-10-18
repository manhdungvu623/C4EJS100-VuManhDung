{
    let L=0, H=0;
    for (i=1; i<=6; i++)
    {
        if (i<=3)
        {
            L++;
        }
        else
        {
            H++;
        }
    }
    console.log(`${L} L`);
    console.log(`${H} H`);
    }
    
    {
    let L=0, H=0;
    let n = Number(prompt("Enter the total number L and H"));
    for (i=1; i<=n; i++)
    {
        if (i<=(n/2))
        {
            L++;
        }
        else
        {
            H++;
        }
    }
    console.log(`${L} L`);
    console.log(`${H} H`);
    }
    
    {
    for (let i=1;i<=4;i++)
        {
            console.log("0");
            console.log("1");
        }
    
    }
    
    {
    let n = prompt("Enter n");
    for (let i=1; i<=n; i++)
    {
        console.log("0");
        console.log("1");
    }
    
    }