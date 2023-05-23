!function(){var w,f,g,b,p,n,s,k
!function(a){"use strict"
var e,t,o,n=a("#header").outerHeight()-16
window.matchMedia("(max-width: 991px)").matches&&(n+=16),a(document).on("click",".nav-menu a, .mobile-nav a, .scrollto",function(e){var t
if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname&&(e.preventDefault(),(t=a(this.hash)).length))return t=t.offset().top-n,"#header"==a(this).attr("href")&&(t=0),a("html, body").animate({scrollTop:t},1500,"easeInOutExpo"),a(this).parents(".nav-menu, .mobile-nav").length&&(a(".nav-menu .active, .mobile-nav .active").removeClass("active"),a(this).closest("li").addClass("active")),a("body").hasClass("mobile-nav-active")&&(a("body").removeClass("mobile-nav-active"),a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),a(".mobile-nav-overly").fadeOut()),!1}),a(document).ready(function(){var e
window.location.hash&&(e=window.location.hash,a(e).length&&(e=a(e).offset().top-n,a("html, body").animate({scrollTop:e},1500,"easeInOutExpo")))}),a(".nav-menu").length?(e=a(".nav-menu").clone().prop({class:"mobile-nav d-lg-none"}),a("body").append(e),a("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'),a("body").append('<div class="mobile-nav-overly"></div>'),a(document).on("click",".mobile-nav-toggle",function(e){a("body").toggleClass("mobile-nav-active"),a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),a(".mobile-nav-overly").toggle()}),a(document).on("click",".mobile-nav .drop-down > a",function(e){e.preventDefault(),a(this).next().slideToggle(300),a(this).parent().toggleClass("active")}),a(document).click(function(e){var t=a(".mobile-nav, .mobile-nav-toggle")
t.is(e.target)||0!==t.has(e.target).length||a("body").hasClass("mobile-nav-active")&&(a("body").removeClass("mobile-nav-active"),a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),a(".mobile-nav-overly").fadeOut())})):a(".mobile-nav, .mobile-nav-toggle").length&&a(".mobile-nav, .mobile-nav-toggle").hide(),t=a("section"),o=a(".nav-menu, #mobile-nav"),a(window).on("scroll",function(){var n=a(this).scrollTop()+200
t.each(function(){var e=a(this).offset().top,t=e+a(this).outerHeight()
e<=n&&n<=t&&(n<=t&&o.find("li").removeClass("active"),o.find('a[href="#'+a(this).attr("id")+'"]').parent("li").addClass("active")),n<300&&a(".nav-menu ul:first li:first").addClass("active")})}),a(window).scroll(function(){100<a(this).scrollTop()?a("#header").addClass("header-scrolled"):a("#header").removeClass("header-scrolled")}),100<a(window).scrollTop()&&a("#header").addClass("header-scrolled"),a(window).scroll(function(){100<a(this).scrollTop()?a(".back-to-top").fadeIn("slow"):a(".back-to-top").fadeOut("slow")}),a(".back-to-top").click(function(){return a("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1}),a('[data-toggle="counter-up"]').counterUp({delay:10,time:1e3}),a(window).on("load",function(){var e=a(".portfolio-container").isotope({itemSelector:".portfolio-item"})
a("#portfolio-flters li").on("click",function(){a("#portfolio-flters li").removeClass("filter-active"),a(this).addClass("filter-active"),e.isotope({filter:a(this).data("filter")})}),a(document).ready(function(){a(".venobox").venobox()})}),a(".testimonials-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,responsive:{0:{items:1},768:{items:2},900:{items:3}}}),a(".portfolio-details-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1})}(jQuery)
const y=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"Burn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0In",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1In",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount0Out",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1Out",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"Swap",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint112",name:"reserve0",type:"uint112"},{indexed:!1,internalType:"uint112",name:"reserve1",type:"uint112"}],name:"Sync",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MINIMUM_LIQUIDITY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"PERMIT_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"burn",outputs:[{internalType:"uint256",name:"amount0",type:"uint256"},{internalType:"uint256",name:"amount1",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReserves",outputs:[{internalType:"uint112",name:"_reserve0",type:"uint112"},{internalType:"uint112",name:"_reserve1",type:"uint112"},{internalType:"uint32",name:"_blockTimestampLast",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_token0",type:"address"},{internalType:"address",name:"_token1",type:"address"}],name:"initialize",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"kLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[{internalType:"uint256",name:"liquidity",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"price0CumulativeLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"price1CumulativeLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"skim",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount0Out",type:"uint256"},{internalType:"uint256",name:"amount1Out",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"swap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],
payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"sync",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"token0",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"token1",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],c="0x0000000000000000000000000000000000000000",v=[{anonymous:!(k=[{name:"eth",http_provider_link:"https://mainnet.infura.io/v3/215b4c430ead45b6bed4559fe163c8fc",chain_name:"ethereum mainnet",native_token:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",native_token_symbol:"ETH",locker_address:"0xdf77a4d44d5fb29bc906e645168fd7c224e1b55d",vt_address:"",vt_fee:.025,explorer:"https://etherscan.com",lp:[{name:"Uniswap",router_address:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",factory_address:"0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",pair_name:"uniswap v2"}],fee:.05,options:{rpc:{1:"https://mainnet.infura.io/v3/215b4c430ead45b6bed4559fe163c8fc"},rpcUrl:"https://mainnet.infura.io/v3/215b4c430ead45b6bed4559fe163c8fc",network:"mainnet",chainId:1}},{name:"polygon",http_provider_link:"https://rpc-mainnet.maticvigil.com/",chain_name:"matic mainnet",native_token:"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",native_token_symbol:"MATIC",locker_address:"0xDc037A4291C7bB878e0299404216f19a71a66E54",vt_address:"",vt_fee:25,explorer:"https://polygonscan.com",lp:[{name:"Quickswap",router_address:"0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff ",factory_address:"0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",pair_name:"uniswap v2"}],fee:50,options:{rpc:{137:"https://rpc-mainnet.maticvigil.com/"},rpcUrl:"https://rpc-mainnet.maticvigil.com/",network:"polygon",chainId:137}},{name:"bsc",http_provider_link:"https://bsc-dataseed.binance.org",chain_name:"binance smart chain mainnet",native_token:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",native_token_symbol:"BNB",locker_address:"0xB4172656E6C8AEFFC45Af7BC30eEaE017BC90201",vt_address:"0x084F11dF18C62033bcb017F18ced5a2D7f994972",vt_fee:.15,explorer:"https://bscscan.com",lp:[{name:"PancakeSwap",router_address:"0x10ED43C718714eb63d5aA57B78B54704E256024E",factory_address:"0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",pair_name:"Pancake LPs"}],fee:.3,options:{rpc:{56:"https://bsc-dataseed.binance.org/"},rpcUrl:"https://bsc-dataseed.binance.org/",network:"binance",chainId:56}}]),inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnLockAmountIncreased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newUnlockTime",type:"uint256"}],name:"OnLockDurationIncreased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"migrator",type:"address"}],name:"OnLockMigration",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OnLockOwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnLockWithdrawal",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"unlockTime",type:"uint256"}],name:"OnTokenLock",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"}],name:"OnTokenUnlock",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"newUnlockTime",type:"uint256"}],name:"extendLockTime",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"amountToIncrement",type:"uint256"},{internalType:"uint8",name:"feePaymentMode",type:"uint8"}],name:"increaseLockAmount",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"lpToken",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"unlockTime",type:"uint256"},{internalType:"address payable",name:"withdrawer",type:"address"},{internalType:"uint8",name:"feePaymentMode",type:"uint8"}],name:"lockTokens",outputs:[{internalType:"uint256",name:"lockId",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"address",name:"migratorContract",type:"address"}],name:"migrate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",
outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setEthFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"newFeeReceiver",type:"address"}],name:"setFeeReceiver",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setIncreaseAmountEthFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setIncreaseAmountUniFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"percent",type:"uint256"}],name:"setLpFeePercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newMigrator",type:"address"}],name:"setMigrator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setUniFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_uniToken",type:"address"}],name:"setUniToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"address",name:"newOwner",type:"address"}],name:"transferLock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawPartially",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"_feesReceiver",type:"address"},{internalType:"address",name:"_uniToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"ethFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"feeReceiver",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"increaseAmountEthFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"increaseAmountUniFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lockNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lpFeePercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"lpToken",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"lpLockAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"lpToken",type:"address"}],name:"lpLocksLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"migrator",outputs:[{internalType:"contract IMigrator",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"tokenLocks",outputs:[{internalType:"address",name:"lpToken",type:"address"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"unlockTime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniToken",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"userLockAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"userLocksLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],h=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],type:"function"},,{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}]
g=f=w=void 0
const t=window.Web3Modal.default,a=window.WalletConnectProvider.default
async function o(){if(v_info=await r(),0==v_info.status)return console.log("skipping wallet refresh as new account is not compatible"),$("#newlock_connect_wallet_msg").text("Your connected wallet information seems to have changed, please try reconnecting."),$("#newlock_connect_wallet_msg").show(),$("#newlock_connected_wallet").hide(),void $("#newlock_connect_wallet").show()
D(v_info)}function i(e){e.on("accountsChanged",async e=>{await o()}),e.on("chainChanged",async e=>{await o()}),e.on("disconnect",async(e,t)=>{$("#newlock_connect_wallet_msg").text("Wallet Disconnected. Please refresh page."),await $("#newlock_connect_wallet_msg").show()})}async function r(){var e={status:!0,msg:""},t={status:!0,msg:""},n=new Web3(w),a=await n.eth.getChainId()
return(a=evmChains.getChain(a)).name.toLowerCase()!=g.chain_name?(console.log("Not on Mainnet"),t.status=!1,t.msg="Current wallet not on Mainnet"):(await n.eth.getAccounts()).length||(console.log("No account information present"),t.status=!1,t.msg="No account information in current wallet."),0==(e=await t).status||(e=await async function(){var e,t={status:!0,msg:""},n=new Web3(w),a=await n.eth.getAccounts()
if(!a.length)return console.log("No account information present"),t.status=!1,t.msg="No account information in current wallet.",t
for(e=0;e<a.length;){if(n.utils.isAddress(a[e].toLowerCase())){f=a[e]
break}e++}return e>=a.length&&(console.log("No account information present"),t.status=!1,t.msg="No account information in current wallet."),t}()).status,e}$(document).ready(async function(){})
async function e(e){g=k[e],function(){f=w=void 0
var e=g.options,e={walletconnect:{package:a,options:e}}
n=new t({cacheProvider:!1,providerOptions:e,disableInjectedProvider:!1}),console.log("Web3Modal instance is",n)}(),v_info=await async function(){var t={status:!0,msg:""}
try{w=await n.connectTo("injected")}catch(e){return w=void 0,console.log("Could not get injected wallet connection",e),t.status=!1,t.msg="No wallet detected",t}return 0==(t=await r()).status?f=w=void 0:(i(w),D(t)),t}(),0==v_info.status&&($("#newlock_connect_wallet_msg").text("Could not connect. Please check your wallet network."),$("#newlock_connect_wallet_msg").show(),$("#newlock_connected_wallet").hide(),$("#newlock_connect_wallet").show())}b=void 0,p=[]
async function x(e){var t=new Web3(w),e=await(e=new t.eth.Contract(y,e)).methods.allowance(f,g.locker_address).call()
return(t=t.utils.toBN(2).pow(t.utils.toBN(256)).sub(t.utils.toBN(1))).cmp(Web3.utils.toBN(e))<=0}async function d(){var e,t,n,a,o,i,s,l,r
for(console.log("get all locks"),e=[],t=new Web3(w),n=f,o=await(a=new t.eth.Contract(v,g.locker_address)).methods.userLocksLength(n).call(),i=0;i<o;)s=await a.methods.userLockAt(n,i).call(),(l=await a.methods.tokenLocks(s).call()).lpToken=l.lpToken.toLowerCase(),r=await m(l.lpToken),r={id:s,lp_address:l.lpToken,amount:t.utils.toBN(l.tokenAmount),status:!0,unlock_time:l.unlockTime,lp_info:r},e.push(r),i++
return e}async function u(e,t){var n,a,o,i,s,l,r
if(console.log("get all locks"),n=[],i=await(o=new(a=new Web3(g.http_provider_link)).eth.Contract(v,g.locker_address)).methods.lockNonce().call(),!((i=parseInt(i))<e)){for(s=e;s<i&&s<e+t;)(l=await o.methods.tokenLocks(s).call()).lpToken=l.lpToken.toLowerCase(),l.lpToken.toLowerCase()!=c.toLowerCase()&&(r=await m(l.lpToken),r={id:s,lp_address:l.lpToken,amount:a.utils.toBN(l.tokenAmount),status:!0,unlock_time:l.unlockTime,lp_info:r},n.push(r)),s++
return n}}async function m(e){var t,n=e,a=w
if(null==w&&(a=g.http_provider_link),a={token0_info:{address:"",name:"",symbol:""},token1_info:{address:"",name:"",symbol:""},total_supply:new(e=new Web3(a)).utils.BN(0),valid:!0,err_msg:"",allowance:!1},!e.utils.isAddress(n))return a.err_msg="Not a valid LP address",S("LP token address"+n),a.valid=!1,a
if((await e.eth.getCode(n)).toLowerCase()=="0x".toLowerCase())return a.err_msg="Not a valid LP address",S("LP token code"+n),a.valid=!1,a
try{if(t=new e.eth.Contract(y,n),a.name=await t.methods.name().call(),a.name.toLowerCase()!=g.lp[0].pair_name.toLowerCase())return a.err_msg="Not a valid LP address",S("LP token"+n),a.valid=!1,a}catch(e){return a.err_msg="Not a valid LP address",S("LP token exception"+n),a.valid=!1,a}return a.token0_info.address=await t.methods.token0().call(),a.token1_info.address=await t.methods.token1().call(),a.total_supply=e.utils.toBN(await t.methods.totalSupply().call()),t=new e.eth.Contract(h,a.token0_info.address),a.token0_info.symbol=await t.methods.symbol().call(),a.token0_info.name=await t.methods.name().call(),e=new e.eth.Contract(h,a.token1_info.address),a.token1_info.symbol=await e.methods.symbol().call(),a.token1_info.name=await e.methods.name().call(),null!=f&&(a.allowance=await x(n)),a}async function _(e){var t=new Web3(w),e=await(e=new t.eth.Contract(y,e)).methods.balanceOf(f).call(),e=t.utils.fromWei(e,"ether")
return parseFloat(e),e}async function T(){var e,t
if(b)for(l in e=await _(b),$("#newlock_lptoken_balance_info").text(e),$("#newlock_amount").val(e),percentSwitch(100),t=await d())t[l].lp_address.toLowerCase()==b.toLowerCase()&&$("#newlock_result_info").html("You already have a lock for this LP. See in <a onclick=$('#lock_manage_tab_link').click() href='#tab-2'> My Locks.</a>")}function L(e){$("#newlock_lock_max_amount").prop("disabled",e),$("#newlock_amount").prop("disabled",e),$("#newlock_unlocktime_now").prop("disabled",e),$("#newlock_unlocktime_plus1").prop("disabled",e),$("#newlock_unlocktime").prop("disabled",e),$("#newlock_feeLP").prop("disabled",e),$("#newlock_feeBNB").prop("disabled",e),$("#newlock_lockbutton").prop("disabled",e),$("#newlock_lockbutton_approve").prop("disabled",e)}function C(){$("#newlock_amount").val(""),document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours()+24),!0),$("#newlock_unlocktime_info").text("Will lock for 1 day"),$("#newlock_feeLP").prop("checked",!1),$("#newlock_feeBNB").prop("checked",!0),$("#newlock_lptoken_info").html("--/--"),$("#newlock_lptoken_balance_info").text("0"),$("#newlock_lockbutton_approve span").first().text("Approve"),$("#myRangeMonth")[0].value=0,$("#slide-percentage-month")[0].innerText="0%",$("#myRange")[0].value=0,$("#slide-percentage")[0].innerText="0%"}async function M(e){var t,n=w
return null==w&&(n=g.http_provider_link),t=e,(n=new Web3(n)).utils.isAddress(e)&&((await n.eth.getCode(e)).toLowerCase()=="0x".toLowerCase()||((await new n.eth.Contract(y,e).methods.name().call()).toLowerCase(),g.lp[0].pair_name.toLowerCase())),t}async function I(e){var t,n,a
try{if($("#newlock_result_info").html(""),$("#newlock_lptoken_info_spinner").show(),C(),e=$("#newlock_lpaddress").val().trim().toLowerCase(),t=new Web3(new Web3.providers.HttpProvider(g.http_provider_link)),42==e.length&&!t.utils.isAddress(e)&&(S("lower case not valid "+e),e=e.toUpperCase(),!t.utils.isAddress(e))){S("upper case not valid "+e)
try{e=t.utils.toChecksumAddress(e),S("checksum case is valid "+t.utils.isAddress(e))}catch(e){S("checksum case is not failed")}}S("New Lock input for: "+e)
try{e=await M(e)}catch(e){}(n=await m(e)).valid?(b=e,a="https://etherscan.com/token/",$("#newlock_lptoken_info").html('<a target="_blank" href='+a+n.token0_info.address+">"+n.token0_info.symbol+'</a> / <a target="_blank" href='+a+n.token1_info.address+">"+n.token1_info.symbol+"</a>"),await T(),L(!1),n.allowance?($("#newlock_lockbutton_approve").prop("disabled",!0),$("#newlock_lockbutton_approve span").first().text("Approved")):$("#newlock_lockbutton").prop("disabled",!0)):($("#newlock_lptoken_info").html(n.err_msg),L(!0),S("New LP token fetch failed: "+n.err_msg))}catch(e){console.log(e),S("New LP token fetch failed: "+(null!=e.message?e.message:"Unknown error")),S("New LP token fetch failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#newlock_lptoken_info").text("Something went wrong. Please try again."),L(!0),b=void 0}finally{$("#newlock_lptoken_info_spinner").hide()}}async function D(e){var t
null!=f?($("#newlock_connect_wallet").hide(),$("#newlock_connected_wallet_address").text(f.substring(0,6)+".."+f.substring(f.length-4,f.length)),$("#newlock_connected_wallet").show(),$("#newlock_connect_wallet_msg").hide(),$("#newlock_lpaddress").prop("disabled",!1),$("#newlock_lptoken_info").html("--/--"),!b||(t=await m(b)).valid&&(await T(),t.allowance?($("#newlock_lockbutton_approve").prop("disabled",!0),$("#newlock_lockbutton_approve span").first().text("Approved"),$("#newlock_lockbutton").prop("disabled",!1)):($("#newlock_lockbutton").prop("disabled",!0),$("#newlock_lockbutton_approve").prop("disabled",!1),$("#newlock_lockbutton_approve span").first().text("Approve")))):($("#newlock_connect_wallet").show(),$("#newlock_connected_wallet_address").text(""),$("#newlock_connected_wallet").hide(),$("#newlock_lpaddress").prop("disabled",!0),$("#newlock_connect_wallet_msg").text(e.msg),$("#newlock_connect_wallet_msg").show(),L(!0))}async function P(){var e=new URLSearchParams(window.location.search)
$('a[href="#certificate"]').show(),$('a[href="#certificate"]').tab("show"),document.querySelector("#services-locker").scrollIntoView({behavior:"smooth"}),await async function(e,t){var n,a,o,i,s,r,c,d,p,u,m,_
if(null!=t){$("#lock_certificate_container").show(),$("#lock_certificate_spinner").show(),n=k[0],"polygon"==t.toLowerCase()&&(n=k[1]),"bsc"==t.toLowerCase()&&(n=k[2])
try{if(0==(a=await async function(e,t){var n,a,o,i,s,l,r,c
for(console.log("get lock by LP"),n=[],a=t.http_provider_link,s=await(i=new(o=new Web3(a)).eth.Contract(v,t.locker_address)).methods.lpLocksLength(e).call(),l=0;l<s;)c=await i.methods.lpLockAt(e,l).call(),(r=await i.methods.tokenLocks(c).call()).lpToken=r.lpToken.toLowerCase(),c=await async function(e,t){var n,a=e,o=t.http_provider_link,o={token0_info:{address:"",name:"",symbol:""},token1_info:{address:"",name:"",symbol:""},total_supply:new(e=new Web3(o)).utils.BN(0),valid:!0,err_msg:"",allowance:!1}
if(!e.utils.isAddress(a))return o.err_msg="Not a valid LP address",S("LP token address"+a),o.valid=!1,o
if((await e.eth.getCode(a)).toLowerCase()=="0x".toLowerCase())return o.err_msg="Not a valid LP address",S("LP token code"+a),o.valid=!1,o
try{if(n=new e.eth.Contract(y,a),o.name=await n.methods.name().call(),o.name.toLowerCase()!=t.lp[0].pair_name.toLowerCase())return o.err_msg="Not a valid LP address",S("LP token"+a),o.valid=!1,o}catch(e){return o.err_msg="Not a valid LP address",S("LP token exception"+a),o.valid=!1,o}return o.token0_info.address=await n.methods.token0().call(),o.token1_info.address=await n.methods.token1().call(),o.total_supply=e.utils.toBN(await n.methods.totalSupply().call()),n=new e.eth.Contract(h,o.token0_info.address),o.token0_info.symbol=await n.methods.symbol().call(),o.token0_info.name=await n.methods.name().call(),e=new e.eth.Contract(h,o.token1_info.address),o.token1_info.symbol=await e.methods.symbol().call(),o.token1_info.name=await e.methods.name().call(),null!=f&&(o.allowance=await x(a)),o}(r.lpToken,t),c={lp_address:r.lpToken,amount:o.utils.toBN(r.tokenAmount),status:!0,unlock_time:r.unlockTime,lp_info:c},n.push(c),l++
return n}(e,n)).length)return void console.log("no address found")
for(l in $("#certificate_network").html(t.toUpperCase()),"eth"==t.toLowerCase()&&$("#network-eth-logo").show(),"polygon"==t.toLowerCase()&&$("#network-polygon-logo").show(),"bsc"==t.toLowerCase()&&$("#network-bsc-logo").show(),new QRCode(document.getElementById("certificate_qrcode"),{text:window.location.origin+window.location.pathname+"?certificate="+a[0].lp_address+"&network="+t,width:128,height:128,correctLevel:QRCode.CorrectLevel.H}),$("#certificate_lockerhead").show(),$("#lock_certificate_lptoken").prop("href",n.explorer+"/token/"+a[0].lp_address),$("#lock_certificate_token0").prop("href",n.explorer+"/token/"+a[0].lp_info.token0_info.address),$("#lock_certificate_token1").prop("href",n.explorer+"/token/"+a[0].lp_info.token1_info.address),$("#lock_certificate_token0 span").text(a[0].lp_info.token0_info.symbol),$("#lock_certificate_token1 span").text(a[0].lp_info.token1_info.symbol),i=new(o=new Web3(new Web3.providers.HttpProvider(n.http_provider_link))).utils.BN(0),s=a[0].lp_info.total_supply,r=[],a)c=a[l],new Date(1e3*c.unlock_time)>new Date&&(i=i.add(c.amount),r.push({time:new Date(1e3*c.unlock_time),amount:parseFloat(o.utils.fromWei(c.amount,"ether"))}))
d=o.utils.fromWei(i,"ether"),p=o.utils.fromWei(s,"ether"),0!=d?$("#lock_certificate_status").html("<i class='icofont-check-circled' style='font-size: 30px;color:green'></i> LP Pair Locked"):$("#lock_certificate_status").html("<i class='icofont-close-circled' style='font-size: 30px;color:red'></i> LP Pair Unlocked"),$("#lock_certificate_lockpercent .progress-value").text((d/p*100).toFixed(2)+"%"),m=180<(u=parseInt(d/p*360))?"#049dff":90<u?"#fdba04":"#ff0c04",$(".progress.red .progress-bar").prop("style","border-color: "+m),180<u?($.keyframe.define({name:"loading-1",from:{transform:"rotate(0deg)"},to:{transform:"rotate(180deg)"}}),$.keyframe.define({name:"loading-2",from:{transform:"rotate(0deg)"},to:{transform:"rotate("+(u-180)+"deg)"}})):($.keyframe.define({name:"loading-1",from:{transform:"rotate(0deg)"},to:{transform:"rotate("+u+"deg)"}}),$.keyframe.define({name:"loading-2",from:{transform:"rotate(0deg)"},to:{transform:"rotate(0deg)"}})),$("#lock_certificate_lockamount").text(parseFloat(d).toFixed(4)+" LP tokens out of "+parseFloat(p).toFixed(4)+" locked"),$("#lock_certificate_unlocktime").html(""),_=$("#lock_certificate_unlocktime"),$.each(r,function(e){var t=(a=r[e].time)-new Date,n=(r[e].amount/p*100).toFixed(2),a=$("<li />").appendTo(_)
$("<small><a/>").text(r[e].amount.toFixed(4)+"("+n+"%) tokens unlock "+moment.duration(t).humanize(!0)).appendTo(a)})}finally{$("#lock_certificate_spinner").hide()}}}(e.get("certificate"),e.get("network"))}function W(e){$("#managelock_optionwithdraw_button").prop("disabled",e),$("#managelock_optionextend_button").prop("disabled",e),$("#managelock_optionincrement_button").prop("disabled",e),$("#managelock_optiontransfer_button").prop("disabled",e),$("#managelock_optiongeneratelink_button").prop("disabled",e)}function N(){$("#managelock_optionwithdraw_button").on("click",async function(e){await function(){$("#managelock_withdraw_input").show(),$("#managelock_withdraw_input").focus(),$("#managelock_withdraw_max_button").show(),$("#managelock_withdraw_available_display").show(),$("#managelock_withdraw_submit_button").show(),$("#managelock_withdraw_max_button").unbind("click"),$("#managelock_withdraw_submit_button").unbind("click"),$("#managelock_withdraw_input").unbind("keyup")
var e=$("#managelock_withdraw_submit_button").attr("data-index")
p[e].unlock_time>(new Date).getTime()/1e3?($("#managelock_withdraw_available_display span").text("0"),$("#managelock_withdraw_submit_button").prop("disabled",!0)):($("#managelock_withdraw_available_display span").text($("#lock_list_lockamount").text()),$("#managelock_withdraw_submit_button").prop("disabled",!1)),$("#managelock_withdraw_submit_button").on("click",async function(e){await async function(){var e,t,n,a,o,i,s,l,r,c,d
if($("#managelock_withdraw_result").html(""),$("#managelock_withdraw_result").show(),$("#managelock_withdraw_spinner").show(),e=!1,n=new Web3(new Web3.providers.HttpProvider(g.http_provider_link)),$("#managelock_withdraw_available_display span").text()==$("#managelock_withdraw_input").val().trim().toString()&&(e=!0),0==(t=n.utils.toBN(n.utils.toWei($("#managelock_withdraw_input").val().trim(),"ether"))))return $("#managelock_withdraw_result").html("Withdraw amount not set"),void $("#managelock_withdraw_spinner").hide()
W(!0),$("#managelock_withdraw_input").prop("disabled",!0),$("#managelock_withdraw_max_button").prop("disabled",!0),$("#managelock_withdraw_submit_button").prop("disabled",!0),n=$("#managelock_withdraw_submit_button").attr("data-index"),n=p[n].id
try{o=n,i=t,s=e,console.log("unlock token"),l={output:{},status:!0,msg:""},d=new Web3(w),r=f,c=d.utils.toBN(0),d=new d.eth.Contract(v,g.locker_address),s?await d.methods.withdraw(o).send({from:r,value:c}).on("transactionHash",function(e){console.log("Unlock : ",e)}).on("confirmation",function(e,t){console.log("Unlock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){l.status=!1,l.err_msg=e}):await d.methods.withdrawPartially(o,i).send({from:r,value:c}).on("transactionHash",function(e){console.log("Unlock : ",e)}).on("confirmation",function(e,t){console.log("Unlock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){l.status=!1,l.err_msg=e}),(a=await l).status?$("#managelock_withdraw_result").html("Withdraw successful. Please refresh page."):$("#managelock_withdraw_result").html("Withdraw failed: "+a.err_msg)}catch(e){console.log(e),S(n+" Withdraw Lock failed: "+(null!=e.message?e.message:"Unknown error")),S(n+" Withdraw Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_withdraw_result").html("Withdraw failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_withdraw_input").prop("disabled",!1),$("#managelock_withdraw_max_button").prop("disabled",!1),$("#managelock_withdraw_submit_button").prop("disabled",!1),$("#managelock_withdraw_spinner").hide(),W(!1)}}()}),$("#managelock_withdraw_max_button").on("click",function(e){$("#managelock_withdraw_input").val($("#managelock_withdraw_available_display span").text())}),$("#managelock_withdraw_input").keyup(function(){var e,t=$(this).val()
""!=(t=isNaN(t)&&2<(t=t.replace(/[^0-9\.]/g,"")).split(".").length?t.replace(/\.+$/,""):t)&&0!=$("#managelock_withdraw_available_display span").text()&&(100<(e=(e=t/$("#managelock_withdraw_available_display span").text()*100).toFixed(2))&&(e=100,t=$("#managelock_withdraw_available_display span").text()),$("#myRangeWithdraw")[0].value=e,$("#slide-percentage-withdraw")[0].innerText=e+"%"),$(this).val(t)})}(),$(this).closest(".Input-Wrapper-manage").find(".content-wrapper-manage").slideToggle()}),$("#managelock_optionextend_button").on("click",async function(e){var t,n
$("#managelock_extend_input").show(),$("#managelock_extend_input").focus(),$("#managelock_extend_current_button").show(),$("#managelock_extend_plus1_button").show(),$("#managelock_extend_submit_button").show(),$("#managelock_extend_current_button").unbind("click"),$("#managelock_extend_plus1_button").unbind("click"),$("#managelock_extend_submit_button").unbind("click"),$("#managelock_extend_input").unbind("input"),t=$("#managelock_increment_submit_button").attr("data-index"),n=p[t].unlock_time,n=parseInt(n)+60,flatpickr("#managelock_extend_input",{enableTime:!0,dateFormat:"Y-m-d H:i",defaultDate:new Date(1e3*n),minDate:new Date(1e3*(n-59)),allowInput:!0}),$("#managelock_extend_submit_button").on("click",async function(e){await async function(){var e,t,n,a,o,i,s,l,r
$("#managelock_extend_result").html(""),$("#managelock_extend_result").show(),e=new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj),W(!0),$("#managelock_extent_input").prop("disabled",!0),$("#managelock_extend_submit_button").prop("disabled",!0),$("#managelock_extend_current_button").prop("disabled",!0),$("#managelock_extend_plus1_button").prop("disabled",!0),$("#managelock_extend_spinner").show(),t=$("#managelock_extend_submit_button").attr("data-index"),t=p[t].id
try{a=t,o=e,console.log("increment unlock time"),i={output:{},status:!0,msg:""},s=new Web3(w),l=f,r=s.utils.toBN(0),await new s.eth.Contract(v,g.locker_address).methods.extendLockTime(a,parseInt(o.getTime()/1e3)).send({from:l,value:r}).on("transactionHash",function(e){console.log("Extend : ",e)}).on("confirmation",function(e,t){console.log("Extend confirmed")}).on("receipt",function(e){}).on("error",function(e,t){i.status=!1,i.err_msg=e}),(n=await i).status?$("#managelock_extend_result").html("Extend successful. Please refresh page."):$("#managelock_extend_result").html("Extend failed: "+n.err_msg)}catch(e){console.log(e),S(t+" Extend Lock failed: "+(null!=e.message?e.message:"Unknown error")),S(t+" Extend Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_extend_result").html("Extend failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_extent_input").prop("disabled",!1),$("#managelock_extend_submit_button").prop("disabled",!1),$("#managelock_extend_current_button").prop("disabled",!1),$("#managelock_extend_plus1_button").prop("disabled",!1),$("#managelock_extend_spinner").hide(),W(!1)}}()}),$("#managelock_extend_input").on("input",function(){var e=new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj)
"Invalid Date"!=e?(e-=new Date,$("#managelock_extend_info").html("Will lock for "+moment.duration(e).humanize(!1)),e/=2592e6,e=(e=100<(e=(e=Math.abs(Math.round(e)))/60*100)?100:e).toFixed(0),$("#myRangeMonthExtend")[0].value=e,$("#slide-percentage-month-extend")[0].innerText=e+"%"):document.querySelector("#managelock_extend_input")._flatpickr.setDate(new Date(1e3*n),!0)}),$("#managelock_extend_current_button").on("click",function(e){document.querySelector("#managelock_extend_input")._flatpickr.setDate(new Date(1e3*n),!0)}),await $("#managelock_extend_plus1_button").on("click",function(e){var t=new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj)
t.setMonth(t.getMonth()+12),document.querySelector("#managelock_extend_input")._flatpickr.setDate(t,!0)}),$(this).closest(".Input-Wrapper-manage").find(".content-wrapper-manage").slideToggle()}),$("#managelock_optionincrement_button").on("click",async function(e){var t
$("#managelock_increment_input").show(),$("#managelock_increment_input").focus(),$("#managelock_increment_max_button").show(),$("#managelock_increment_available_display").show(),$("#managelock_increment_submit_button").show(),$("#managelock_increment_feeLP").show(),$("#managelock_increment_feeBNB").show(),$("#managelock_increment_fee_container").show(),$("#managelock_increment_max_button").unbind("click"),$("#managelock_increment_submit_button").unbind("click"),$("#managelock_increment_input").unbind("keyup"),$("#managelock_increment_submit_button").on("click",async function(e){await async function(){var e,t,n,a,o,i,s,l,r,c
if($("#managelock_increment_result").html(""),$("#managelock_increment_result").show(),0!=(e=(t=new Web3(new Web3.providers.HttpProvider(g.http_provider_link))).utils.toBN(t.utils.toWei($("#managelock_increment_input").val().trim(),"ether")))){W(!0),$("#managelock_increment_input").prop("disabled",!0),$("#managelock_increment_submit_button").prop("disabled",!0),$("#managelock_increment_feeLP").prop("disabled",!0),$("#managelock_increment_feeBNB").prop("disabled",!0),$("#managelock_increment_spinner").show(),t=$("#managelock_increment_submit_button").attr("data-index"),t=p[t].id
try{a=t,o=e,console.log("increment lock amount"),i={output:{},status:!0,msg:""},s=new Web3(w),l=f,r=s.utils.toBN(0),c=0,r=s.utils.toBN(s.utils.toWei(g.fee.toString(),"ether")),await new s.eth.Contract(v,g.locker_address).methods.increaseLockAmount(a,o,c).send({from:l,value:r}).on("transactionHash",function(e){console.log("Lock : ",e)}).on("confirmation",function(e,t){console.log("Lock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){i.status=!1,i.err_msg=e}),(n=await i).status?$("#managelock_increment_result").html("Increment successful. Please refresh page."):$("#managelock_increment_result").html("Increment failed: "+n.err_msg)}catch(e){console.log(e),S(t+" Increment Lock failed: "+(null!=e.message?e.message:"Unknown error")),S(t+" Increment Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_increment_result").html("Increment failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_increment_input").prop("disabled",!1),$("#managelock_increment_submit_button").prop("disabled",!1),$("#managelock_increment_spinner").hide(),$("#managelock_increment_feeLP").prop("disabled",!1),$("#managelock_increment_feeBNB").prop("disabled",!1),W(!1)}}else $("#managelock_increment_result").html("Increment amount not set")}()}),t=$("#managelock_transfer_submit_button").attr("data-index"),t=await _(p[t].lp_address),$("#managelock_increment_available_display span").text(t),$("#managelock_increment_max_button").on("click",function(e){$("#managelock_increment_input").val($("#managelock_increment_available_display span").text())}),$("#managelock_increment_fee_info").text("Flat Fee: "+g.fee+" "+g.native_token_symbol),await $("#managelock_increment_input").keyup(function(){var e,t=$(this).val()
""!=(t=isNaN(t)&&2<(t=t.replace(/[^0-9\.]/g,"")).split(".").length?t.replace(/\.+$/,""):t)&&0!=$("#managelock_increment_available_display span").text()&&(100<(e=(e=t/$("#managelock_increment_available_display span").text()*100).toFixed(2))&&(e=100,t=$("#managelock_increment_available_display span").text()),$("#myRangeIncrement")[0].value=e,$("#slide-percentage-increment")[0].innerText=e+"%"),$(this).val(t)}),$(this).closest(".Input-Wrapper-manage").find(".content-wrapper-manage").slideToggle()}),$("#managelock_optiontransfer_button").on("click",async function(e){$("#managelock_transfer_input").show(),$("#managelock_transfer_input").focus(),$("#managelock_transfer_submit_button").show(),$("#managelock_transfer_submit_button").unbind("click"),await $("#managelock_transfer_submit_button").on("click",async function(e){await async function(){var e,t,n,a,o,i,s,l,r
if($("#managelock_transfer_result").html(""),$("#managelock_transfer_result").show(),t=new Web3(new Web3.providers.HttpProvider(g.http_provider_link)),e=(e=$("#managelock_transfer_input").val().trim()).toLowerCase(),t.utils.isAddress(e)){W(!0),$("#managelock_transfer_input").prop("disabled",!0),$("#managelock_transfer_submit_button").prop("disabled",!0),$("#managelock_transfer_spinner").show(),t=$("#managelock_transfer_submit_button").attr("data-index"),t=p[t].id
try{a=t,o=e,console.log("transfer owner"),i={output:{},status:!0,msg:""},s=new Web3(w),l=f,r=s.utils.toBN(0),await new s.eth.Contract(v,g.locker_address).methods.transferLock(a,o).send({from:l,value:r}).on("transactionHash",function(e){console.log("transfer : ",e)}).on("confirmation",function(e,t){console.log("Transfer confirmed")}).on("receipt",function(e){}).on("error",function(e,t){i.status=!1,i.err_msg=e}),(n=await i).status?$("#managelock_transfer_result").html("Transfer successful. Please refresh page."):$("#managelock_transfer_result").html("Transfer failed: "+n.err_msg)}catch(e){console.log(e),S(t+" Transfer Lock failed: "+(null!=e.message?e.message:"Unknown error")),S(t+" Transfer Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_transfer_result").html("Transfer failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_transfer_input").prop("disabled",!1),$("#managelock_transfer_submit_button").prop("disabled",!1),$("#managelock_transfer_spinner").hide(),W(!1)}}else $("#managelock_transfer_result").html("New owner is not a valid address")}()}),$(this).closest(".Input-Wrapper-manage").find(".content-wrapper-manage").slideToggle()}),$("#managelock_optiongeneratelink_button").on("click",async function(e){$("#managelock_generatelink_display").show(),$("#managelock_generatelink_display").focus(),$("#managelock_generatelink_display").prop("href",window.location.origin+window.location.pathname+"?certificate="+$("#managelock_generatelink_display").attr("data-address")+"&network="+g.name),await $("#managelock_generatelink_display").html("<i class='icofont-share'></i>Lock Certificate Link"),$(this).closest(".Input-Wrapper-manage").find(".content-wrapper-manage").slideToggle()}),$(".content-wrapper-manage").hide()}async function A(){var e,t,n,a,o=new Web3(new Web3.providers.HttpProvider(g.http_provider_link)),i=$("#lock-list")
if(i.html(""),null!=f){$("#managelock_spinner").show(),p=[]
try{for(l in 0==(e=await d()).length&&i.text("You have no locks with this wallet!"),e)t=e[l],n=$("<li />").appendTo(i),a=$('<a data-toggle="collapse" class="" href="#list-lock'+l+'"/>').appendTo(n),parseInt(l),a.text("Pair: "+t.lp_info.token0_info.symbol+"/"+t.lp_info.token1_info.symbol),$('<i class="icofont-simple-down"/>').appendTo(a),$('<div data-index="'+l+'"id="list-lock'+l+'" class="collapse " data-parent=".lock-list" />').appendTo(i),l++
$(".lock-list .collapse").on("shown.bs.collapse",function(e){var t,n,a
$(".lock-list .collapse").each(function(e){$(this).html("")}),$("#"+$(e.target).attr("id")).html(s),t=p[$(e.target).attr("data-index")],$("#lock_list_lockamount").text(o.utils.fromWei(t.amount,"ether")),a=(n=new Date(1e3*t.unlock_time))-new Date,$("#lock_list_unlocktime").text(n.toLocaleString()+" ("+moment.duration(a).humanize(!0)+")"),$("#managelock_generatelink_display").attr("data-address",t.lp_address),$("#lock_list_lptoken").prop("href","https://etherscan.com/token/"+t.lp_address),$("#lock_list_token0").prop("href","https://etherscan.com/token/"+t.lp_info.token0_info.address),$("#lock_list_token1").prop("href","https://etherscan.com/token/"+t.lp_info.token1_info.address),$("#lock_list_token0 span").text(t.lp_info.token0_info.symbol),$("#lock_list_token1 span").text(t.lp_info.token1_info.symbol),e=$(e.target).attr("data-index"),$("#managelock_withdraw_submit_button").attr("data-index",e),$("#managelock_extend_submit_button").attr("data-index",e),$("#managelock_increment_submit_button").attr("data-index",e),$("#managelock_transfer_submit_button").attr("data-index",e),N()}),p=e}catch(e){i.text("Something went wrong!"),console.log(e),S(f+" Get Lock List failed: "+(null!=e.message?e.message:"Unknown error")),S(f+" Get Lock List failed stack: "+(null!=e.stack?e.stack:"Unknown stack"))}finally{$("#managelock_spinner").hide()}}else i.text("Please connect wallet to see locks.")}async function B(){var e,t,n,a,o,i,s,r=$("#browse-locks-list")
r.html(""),$("#browselock_spinner").show(),e=0
try{for(t=await u(e,1);null!=t;){for(l in t)n=t[l],a=$('<li style="top-margin:10px;background-color:#ffe6e6;"/>').appendTo(r),(o=$('<a target="_blank" href="" />').appendTo(a)).prop("href",window.location.origin+window.location.pathname+"?certificate="+n.lp_address+"&network="+g.name),$("<span/>").appendTo(o).text(n.lp_info.token0_info.symbol+" / "+n.lp_info.token1_info.symbol),i=$('<span style="font-size:14px"/>').appendTo(a),s=new Date(1e3*n.unlock_time)-new Date,i.text("unlocks "+moment.duration(s).humanize(!0)),l++
t=await u(e+=1,1)}}catch(e){r.text("Something went wrong. Please refresh page!"),console.log(e),S(f+" Browse Lock List failed: "+(null!=e.message?e.message:"Unknown error")),S(f+" Browse Lock List failed stack: "+(null!=e.stack?e.stack:"Unknown stack"))}finally{$("#browselock_spinner").hide()}}function S(e){try{$.post("/api/log/",{address:e})}catch(e){console.log(e)}}$(document).ready(async function(){e(0),flatpickr("#newlock_unlocktime",{enableTime:!0,dateFormat:"Y-m-d H:i",defaultDate:(new Date).setHours((new Date).getHours()+24),minDate:(new Date).setHours((new Date).getHours()+12),allowInput:!0}),$('a[data-toggle="tab"]').on("shown.bs.tab",async function(e){"#tab-2"==$(e.target).attr("href")&&await A(),"#browse-locks"==$(e.target).attr("href")&&await B()}),$("#newlock_lpaddress").on("input",async function(e){await I()}),$("#newlock_lpaddress").on("keypress",async function(e){13==e.which&&await I()}),$("#newlock_lock_max_amount").on("click",function(e){$("#newlock_amount").val($("#newlock_lptoken_balance_info").text())}),$("#newlock_amount").keyup(function(){var e,t=$(this).val()
""!=(t=isNaN(t)&&2<(t=t.replace(/[^0-9\.]/g,"")).split(".").length?t.replace(/\.+$/,""):t)&&0!=$("#newlock_lptoken_balance_info").text()&&(100<(e=(e=t/$("#newlock_lptoken_balance_info").text()*100).toFixed(2))&&(e=100,t=$("#newlock_lptoken_balance_info").text()),$("#myRange")[0].value=e,$("#slide-percentage")[0].innerText=e+"%"),$(this).val(t)}),$("#newlock_unlocktime").on("input",function(){var e=new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj)
"Invalid Date"!=e?(e-=new Date,$("#newlock_unlocktime_info").html("Will lock for "+moment.duration(e).humanize(!1)),e/=2592e6,e=(e=100<(e=(e=Math.abs(Math.round(e)))/60*100)?100:e).toFixed(0),$("#myRangeMonth")[0].value=e,$("#slide-percentage-month")[0].innerText=e+"%"):document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours()+24),!0)}),$("#newlock_unlocktime_now").on("click",function(e){document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours()+24),!0)}),$("#newlock_unlocktime_plus1").on("click",function(e){var t=new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj)
t.setMonth(t.getMonth()+12),document.querySelector("#newlock_unlocktime")._flatpickr.setDate(t,!0)}),$("#newlock_lockbutton").on("click",async function(e){await async function(e){var t,n,a,o,i,s,l,r,c,d,p,u,m,_,k,y
L(!0),$("#newlock_lpaddress").prop("disabled",!0),$("#newlock_lockbutton_spinner").show(),$("#newlock_result_info").html(""),t=new Web3(new Web3.providers.HttpProvider(g.http_provider_link))
try{if(n=t.utils.toBN(t.utils.toWei($("#newlock_amount").val().trim(),"ether")),a=new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj),42==(e=$("#newlock_lpaddress").val().trim().toLowerCase()).length&&!t.utils.isAddress(e)&&(S("lower case not valid "+e),e=e.toUpperCase(),!t.utils.isAddress(e))){S("upper case not valid "+e)
try{e=t.utils.toChecksumAddress(e),S("checksum case is valid "+t.utils.isAddress(e))}catch(e){S("checksum case is not failed")}}try{e=await M(e)}catch(e){}if(S("New Lock submit for amount: "+n+" time: "+a+"fee: BNBadress: "+e),_=n,k=a,y={valid:!0,msg:""},null==e?(y.msg="LP Token address not set.",y.valid=!1):0==_?(y.msg="LP Token amount not set.",y.valid=!1):k<(k=(k=new Date).setHours(k.getHours()+12))&&(y.msg="Unlock time too soon.",y.valid=!1),(o=y).valid)if(s=e,l=n,r=a,console.log("lock token"),c={output:{},status:!0,msg:""},d=new Web3(w),p=f,u=d.utils.toBN("0"),m=0,u=d.utils.toBN(d.utils.toWei(g.fee.toString(),"ether")),await new d.eth.Contract(v,g.locker_address).methods.lockTokens(s,l,parseInt(r.getTime()/1e3),p,m).send({from:p,value:u}).on("transactionHash",function(e){console.log("Lock : ",e)}).on("confirmation",function(e,t){console.log("Lock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){c.status=!1,c.err_msg=e}),(i=await c).status){$("#newlock_result_info").html("Lock successfully created. <a onclick=$('#lock_manage_tab_link').click() href='#tab-2'>View in My Locks.</a>")
try{$("#newlock_lpaddress").val(""),b=void 0,C()}catch(e){S("Minor New Lock failed: "+(null!=e.message?e.message:"Unknown error")),S("Minor New Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack"))}}else console.log(i.err_msg),$("#newlock_result_info").html(i.err_msg),S("New Lock failed: "+i.err_msg),L(!1),$("#newlock_lockbutton_approve").prop("disabled",!0)
else $("#newlock_result_info").html(o.msg),L(!1),$("#newlock_lockbutton_approve").prop("disabled",!0)}catch(e){console.log(e),S("New Lock failed: "+(null!=e.message?e.message:"Unknown error")),S("New Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#newlock_result_info").html("Lock could not be created: "+(null!=e.message?e.message:"Unknown error")),L(!1),$("#newlock_lockbutton_approve").prop("disabled",!0)}finally{$("#newlock_lpaddress").prop("disabled",!1),$("#newlock_lockbutton_spinner").hide()}}()}),$("#newlock_lockbutton_approve").on("click",async function(e){await async function(){var e,t,n,a
L(!0),$("#newlock_lpaddress").prop("disabled",!0),$("#newlock_lockbutton_approve_spinner").show(),$("#newlock_result_info").html("")
try{t=b,n={output:{},status:!0,msg:""},t=new(a=new Web3(w)).eth.Contract(y,t),a=a.utils.toBN(2).pow(a.utils.toBN(256)).sub(a.utils.toBN(1)),await t.methods.approve(g.locker_address,a).send({from:f}).on("transactionHash",function(e){console.log("Approve : ",e)}).on("confirmation",function(e,t){console.log("Approve confirmed")}).on("receipt",function(e){}).on("error",function(e,t){n.status=!1,n.err_msg=e}),(e=await n).status?($("#newlock_result_info").html("Approved"),$("#newlock_lockbutton_approve").prop("disabled",!0),$("#newlock_lockbutton_approve span").first().text("Approved"),$("#newlock_lockbutton").prop("disabled",!1)):($("#newlock_result_info").html("Approval failed: "+e.err_msg),$("#newlock_lockbutton").prop("disabled",!0))}catch(e){console.log(e),S(b+" Approval failed: "+(null!=e.message?e.message:"Unknown error")),S(b+" Approval failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#newlock_result_info").html("Approval failed: "+(null!=e.message?e.message:"Unknown error")),$("#newlock_lockbutton").prop("disabled",!0)}finally{$("#newlock_lockbutton_approve_spinner").hide(),$("#newlock_lpaddress").prop("disabled",!1),a=$("#newlock_lockbutton").prop("disabled"),e=$("#newlock_lockbutton_approve").prop("disabled"),L(!1),$("#newlock_lockbutton").prop("disabled",a),$("#newlock_lockbutton_approve").prop("disabled",e)}}()}),$("#newlock_connect_wallet").on("click",async function(e){await async function(){var t={status:!0,msg:""}
try{w=await n.connect()}catch(e){return w=void 0,console.log("Could not get injected wallet connection",e),t.status=!1,t.msg="No wallet detected",t}return 0==(t=await r()).status?f=w=void 0:(i(w),D(t)),t}()}),$("input[type=radio][name=network-options]").change(async function(){$("#newlock_lpaddress").val(""),$("#newlock_lpaddress").prop("disabled",!0),C(),e(this.value),$("#newlock_fee_info").text("Flat Fee: "+k[this.value].fee+" "+k[this.value].native_token_symbol),"nav-link active"==$('a[data-toggle="tab"][href="#tab-2"').prop("class")&&await A(),"nav-link active"==$('a[data-toggle="tab"][href="#browse-locks"').prop("class")&&await B()}),new URLSearchParams(window.location.search).has("certificate")&&await P()}),s=`                 

<div class="main-box">
<div class="container inner-box">
    <div class="form-group row text-left">
    <div class="col-lg-12">

    <a target="_blank" href="" id="lock_list_lptoken" style="display:inline"><span>LP Pair </span></a>:
    <a target="_blank" href="" id="lock_list_token0" style="display:inline"><span >--</span></a>/
    <a target="_blank" href="" id="lock_list_token1" style="display:inline"><span >--</span></a>
    </div>
    <div class="col-lg-12">
    <b>LP Pair Amount:&nbsp;</b><span id="lock_list_lockamount">---</span>
    </div>
    <div class="col-lg-12">
    <b>Lock Period:&nbsp;</b><span id="lock_list_unlocktime"  style="list-style: none" >--</span>
    </div>
    </div>   
    <div class="Input-Wrapper Input-Wrapper-manage">
        <div class="Input-title Input-title-manage text-left" id="managelock_optionwithdraw_button">
            <b>Unlock</b>
        </div>
        <div class="content-wrapper content-wrapper-manage">
            <div class="top-Bar">               
                <div class="second-inputinner inputText1">
                    <input  id="managelock_withdraw_input" placeholder="0" value="0" class="input-field">
                    <p class="error-text text-left" style="display:none">Please enter a valid data</p>
                </div>
                <div class="right-Side">
                    <div class="right-head">
                        Balance
                    </div>
                    <div class="right-balance" id="managelock_withdraw_available_display">                                          
                    <span>
                    0
                    </span>
                    </div>
                </div>
            </div>
            <div class="slidecontainer">
                <input type="range" min="0" max="100" value="0" class="slider" onchange="sliderChangeWithdraw()" id="myRangeWithdraw">
            </div>
            <div class="slide-bottom">
                <div class="slide-percentage" id="slide-percentage-withdraw">
                    0%
                </div>
            </div>
            <div class="slide-percent-bottom">
                <div class="col-lg-12 row slide-percent-head">
                    <div class="col-xs-6 col-sm-3 percenttag">
                        <div class="percentageDiv" onclick="percentSwitchWithdraw('25')">
                            25%
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 percenttag">
                        <div class="percentageDiv" onclick="percentSwitchWithdraw('50')">
                            50%
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 percenttag">
                        <div class="percentageDiv" onclick="percentSwitchWithdraw('75')">
                            75%
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 percenttag">
                        <div class="percentageDiv" onclick="percentSwitchWithdraw('100')">
                            Max
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 offset-lg-4">
                <button class="btn btn-primary" id="managelock_withdraw_submit_button" style="margin-bottom: 5px;" disabled>
                <span>Withdraw</span>
                <span id ="managelock_withdraw_spinner" style="display:none"
                class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </button>
                                
            </div>
            <span id ="managelock_withdraw_result"></span>
            
        </div>
        
    </div>


    <div class="Input-Wrapper Input-Wrapper-manage">
    <div class="Input-title Input-title-manage text-left" id="managelock_optionincrement_button">
        <b>Increase Lock Amount</b>
    </div>
    <div class="content-wrapper content-wrapper-manage">
        <div class="top-Bar">               
            <div class="second-inputinner inputText1">
                <input  id="managelock_increment_input" placeholder="0" value="0" class="input-field">
                <p class="error-text text-left" style="display:none">Please enter a valid data</p>
            </div>
            <div class="right-Side">
                <div class="right-head">
                    Balance
                </div>
                <div class="right-balance" id="managelock_increment_available_display">                                          
                <span>
                0
                </span>
                </div>
            </div>
        </div>
        <div class="slidecontainer">
            <input type="range" min="0" max="100" value="0" class="slider" onchange="sliderChangeIncrement()" id="myRangeIncrement">
        </div>
        <div class="slide-bottom">
            <div class="slide-percentage" id="slide-percentage-increment">
                0%
            </div>
        </div>
        <div class="slide-percent-bottom">
            <div class="col-lg-12 row slide-percent-head">
                <div class="col-xs-6 col-sm-3 percenttag">
                    <div class="percentageDiv" onclick="percentSwitchIncrement('25')">
                        25%
                    </div>
                </div>
                <div class="col-xs-6 col-sm-3 percenttag">
                    <div class="percentageDiv" onclick="percentSwitchIncrement('50')">
                        50%
                    </div>
                </div>
                <div class="col-xs-6 col-sm-3 percenttag">
                    <div class="percentageDiv" onclick="percentSwitchIncrement('75')">
                        75%
                    </div>
                </div>
                <div class="col-xs-6 col-sm-3 percenttag">
                    <div class="percentageDiv" onclick="percentSwitchIncrement('100')">
                        Max
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-8">                    
            <label style="margin-left:15px" id="managelock_increment_fee_info"> Flat Fee:  0.05 ETH </label>
        </div>

        <div class="col-lg-3 offset-lg-4">
            <button class="btn btn-primary" id="managelock_increment_submit_button" style="margin-bottom: 5px;">
            <span>Increase</span>
            <span id ="managelock_increment_spinner" style="display:none"
            class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
                            
        </div>
        <span id ="managelock_increment_result"></span>
        
        </div>
        
    </div>



    <div class="Input-Wrapper Input-Wrapper-manage" >
        <div class="Input-title Input-title-manage text-left" id="managelock_optionextend_button">
            <b>Extend Lock Period</b>
        </div>
        <div class="content-wrapper content-wrapper-manage">
            <div class="top-Bar">
                <div class="left-date-Side">
                    <!-- <div class="date-head">
                        26th Mar 2022 6:27 PM
                    </div> -->
                    <input id="managelock_extend_input" class="date-head" placeholder="2021-10-10 10:10">
                    <p class="error-text text-left" style="display:none">Please enter a valid data</p>
                </div>
                <div class="right-Side">
                    <div class="right-head" id="managelock_extend_info">
                        Will lock for 1 day
                    </div>
                </div>
            </div>
            <div class="slidecontainer">
                <input type="range" min="0" max="100" value="0" class="slider" onchange="sliderChangeMonthExtend()" id="myRangeMonthExtend">
            </div>
            <div class="slide-bottom">
                <div class="slide-percentage" id="slide-percentage-month-extend">
                    0%
                </div>
            </div>
            <div class="slide-percent-bottom">
                <div class="col-lg-12 row slide-percent-head">
                    <div class="col-xs-12 col-sm-3 percenttag">
                        <div class="percentageDiv" onclick="monthDivExtend('5')">
                            3 Months
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-3 percenttag">
                        <div class="percentageDiv" onclick="monthDivExtend('10')">
                            6 Months
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-3 percenttag">
                        <div class="percentageDiv" onclick="monthDivExtend('20')">
                            1 Year
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-3 percenttag">
                        <div class="percentageDiv" onclick="monthDivExtend('100')">
                            5 Years
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 offset-lg-4">
            <button class="btn btn-primary" id="managelock_extend_submit_button" style="margin-bottom: 5px;">
            <span>Increase</span>
            <span id ="managelock_extend_spinner" style="display:none"
            class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
                            
            </div>
            <span id ="managelock_extend_result"></span>
            
            </div>

            
        </div>


    <div class="Input-Wrapper Input-Wrapper-manage">
    <div class="Input-title Input-title-manage text-left" id="managelock_optiontransfer_button">
        <b>Transfer Lock Ownership</b>
    </div>
    <div class="content-wrapper content-wrapper-manage">
        <div class="top-Bar">               
            <div class="second-inputinner inputText">
                <input id="managelock_transfer_input" placeholder="Enter new lock owner address"  class="input-field">
                <p class="error-text text-left" style="display:none">Please enter a valid data</p>
            </div>

        </div>
        
        <div class="col-lg-3 offset-lg-4">
            <button class="btn btn-primary" id="managelock_transfer_submit_button" style="margin-bottom: 5px;">
            <span>Transfer</span>
            <span id ="managelock_transfer_spinner" style="display:none"
            class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
                            
        </div>
        <span id ="managelock_transfer_result"></span>
        
        </div>
        
    </div>



    <div class="Input-Wrapper Input-Wrapper-manage">
    <div class="Input-title Input-title-manage text-left" id="managelock_optiongeneratelink_button">
        <b>Lock Certificate Link</b>
    </div>
    <div class="content-wrapper content-wrapper-manage">
        <div class="top-Bar">               
            <div class="second-inputinner inputText1">
            <a style="display:none" target="_blank" href="" id="managelock_generatelink_display">---
            </a>
                <p class="error-text text-left" style="display:none">Please enter a valid data</p>
            </div>

        <div class="col-lg-3 offset-lg-4">
            
            <span id ="managelock_generatelink_spinner" style="display:none"
            class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
                            
        </div>
        <span id ="managelock_generatelink_result"></span>
        
        </div>
        
    </div>



    

</div>




</div>




</div>

`}.call(this)
;
