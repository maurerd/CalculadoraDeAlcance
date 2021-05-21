CalculaViews(1);

function CalculaViews(valorInvestidoReais)
{
    /*	
    1 real => 30 views
	valorInvestidoReais => x_viewsIniciais

	let totalViews =  x_viewsIniciais;
	let viewsAtuais = x_viewsIniciais;

	for(let i = 0; i < 4; i++)
	{
		viewsAtuais = CalculaNewViews(viewsAtuais);
		totalViews += viewsAtuais;
	}
    */

    //A cada 1 real investido rende 30 views iniciais
    let valorBaseReais = 1;
    let viewsPorRealBase = 30;

    let viewsIniciais = RegraDeTres(valorBaseReais, viewsPorRealBase, valorInvestidoReais);

    let totalViews =  viewsIniciais;
	let viewsAtuais = viewsIniciais;

	for(let i = 0; i < 4; i++)
	{
		viewsAtuais = CalculaNewViews(viewsAtuais);
		totalViews += viewsAtuais;
	} 

    console.log("Total Views: " + totalViews);
}

function CalculaNewViews(viewsIniciais)
{
    console.log("Views Iniciais: " + viewsIniciais);

    /*
    100 view => 12 clicks
	30 views (viewsIniciais) => x clicks

	100x = 30*12
	x = 360/100
	x = 3,6 clicks
    */

    let viewsBase = 100;
    let clicksPorViewsBase = 12;

    let totalClicks = RegraDeTres(viewsBase, clicksPorViewsBase, viewsIniciais);

    console.log("Total Clicks: " + totalClicks);

    /*
	20 clicks => 3 shares
	3,6 clicks => x shares

	20x = 3,6*3
	x = 10,8/20
	x = 0,54 shares
    */

    let clicksBase = 20;
    let sharesPorClicksBase = 3;

    let totalShares = RegraDeTres(clicksBase, sharesPorClicksBase, totalClicks);

    console.log("Total Shares: " + totalShares);

    /*
	1 share => 40 new views
	0,54 shares => x new views

	1x = 0,54*40
	x = 21,6 new views
    */

    let sharesBase = 1;
    let newViewsPorShare = 40;

    let totalNewViews = RegraDeTres(sharesBase, newViewsPorShare, totalShares);

    console.log("Total New Views: " + totalNewViews);

    return totalNewViews;
}

/*
valor1 -> valor2
valor3 -> x (retorno)
*/
function RegraDeTres(valor1, valor2, valor3)
{
    var retorno = (valor3 * valor2) / valor1;

    return retorno;
}