var panel = {
    btc_to_usd: null,
    btc_to_gbp: null,
    usd_to_gbp: null,

    setOnline: function () {
        $("#connection").addClass("online");
    },
    setOffline: function () {
        $("#connection").removeClass("online");
    },
    refreshPrices: function () {
        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,GBP", function(json) {
            panel.btc_to_usd = json["USD"];
            panel.btc_to_gbp = json["GBP"];
            panel.renderPrices();
        });
        $.getJSON("https://api.fixer.io/latest?base=USD&symbols=GBP&callback=?", function(json) {
            panel.usd_to_gbp = json["rates"]["GBP"];
            panel.renderPrices();
        });
    },
    renderPrices: function() {
        $("#btc_to_usd").html("$ " + panel.btc_to_usd);
        $("#btc_to_gbp").html("&pound; " + panel.btc_to_gbp);
        $("#usd_to_gbp").html("&pound; " + panel.usd_to_gbp);

        if (panel.btc_to_usd && panel.btc_to_gbp && panel.usd_to_gbp) {
            var arbitrage = (1 - (panel.btc_to_usd * panel.usd_to_gbp) / panel.btc_to_gbp) * 100;
            $("#arbitrage").html("+" + arbitrage.toFixed(2) + "% arbitrage");
            $(".content").fadeTo(200, 1);
        }
    }
};