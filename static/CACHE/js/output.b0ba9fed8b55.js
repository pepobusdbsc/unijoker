!function(){var D,M,L,C,g,c,f
!function(a){"use strict"
var e,t,i,n=a("#header").outerHeight()-16
window.matchMedia("(max-width: 991px)").matches&&(n+=16),a(document).on("click",".nav-menu a, .mobile-nav a, .scrollto",function(e){var t
if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname&&(e.preventDefault(),(t=a(this.hash)).length))return t=t.offset().top-n,"#header"==a(this).attr("href")&&(t=0),a("html, body").animate({scrollTop:t},1500,"easeInOutExpo"),a(this).parents(".nav-menu, .mobile-nav").length&&(a(".nav-menu .active, .mobile-nav .active").removeClass("active"),a(this).closest("li").addClass("active")),a("body").hasClass("mobile-nav-active")&&(a("body").removeClass("mobile-nav-active"),a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),a(".mobile-nav-overly").fadeOut()),!1}),a(document).ready(function(){var e
window.location.hash&&(e=window.location.hash,a(e).length&&(e=a(e).offset().top-n,a("html, body").animate({scrollTop:e},1500,"easeInOutExpo")))}),a(".nav-menu").length?(e=a(".nav-menu").clone().prop({class:"mobile-nav d-lg-none"}),a("body").append(e),a("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'),a("body").append('<div class="mobile-nav-overly"></div>'),a(document).on("click",".mobile-nav-toggle",function(e){a("body").toggleClass("mobile-nav-active"),a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),a(".mobile-nav-overly").toggle()}),a(document).on("click",".mobile-nav .drop-down > a",function(e){e.preventDefault(),a(this).next().slideToggle(300),a(this).parent().toggleClass("active")}),a(document).click(function(e){var t=a(".mobile-nav, .mobile-nav-toggle")
t.is(e.target)||0!==t.has(e.target).length||a("body").hasClass("mobile-nav-active")&&(a("body").removeClass("mobile-nav-active"),a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),a(".mobile-nav-overly").fadeOut())})):a(".mobile-nav, .mobile-nav-toggle").length&&a(".mobile-nav, .mobile-nav-toggle").hide(),t=a("section"),i=a(".nav-menu, #mobile-nav"),a(window).on("scroll",function(){var n=a(this).scrollTop()+200
t.each(function(){var e=a(this).offset().top,t=e+a(this).outerHeight()
e<=n&&n<=t&&(n<=t&&i.find("li").removeClass("active"),i.find('a[href="#'+a(this).attr("id")+'"]').parent("li").addClass("active")),n<300&&a(".nav-menu ul:first li:first").addClass("active")})}),a(window).scroll(function(){100<a(this).scrollTop()?a("#header").addClass("header-scrolled"):a("#header").removeClass("header-scrolled")}),100<a(window).scrollTop()&&a("#header").addClass("header-scrolled"),a(window).scroll(function(){100<a(this).scrollTop()?a(".back-to-top").fadeIn("slow"):a(".back-to-top").fadeOut("slow")}),a(".back-to-top").click(function(){return a("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1}),a('[data-toggle="counter-up"]').counterUp({delay:10,time:1e3}),a(window).on("load",function(){var e=a(".portfolio-container").isotope({itemSelector:".portfolio-item"})
a("#portfolio-flters li").on("click",function(){a("#portfolio-flters li").removeClass("filter-active"),a(this).addClass("filter-active"),e.isotope({filter:a(this).data("filter")})}),a(document).ready(function(){a(".venobox").venobox()})}),a(".testimonials-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,responsive:{0:{items:1},768:{items:2},900:{items:3}}}),a(".portfolio-details-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1})}(jQuery)
const b="0x0000000000000000000000000000000000000000",I=[{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"address",name:"bep20Token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"claimBEP20Token",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"address",name:"bep20Token",type:"address"}],name:"claimBEP20TokenAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"claimBNB",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"}],name:"claimBNBAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"instance",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"destroyInstance",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"newUnlockStartTime",type:"uint256"},{internalType:"uint256",name:"newUnlockEndTime",type:"uint256"}],name:"extendLockTime",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"amountToIncrement",type:"uint256"},{internalType:"uint8",name:"feePaymentMode",type:"uint8"}],name:"increaseLockAmount",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"vestingToken",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"unlockStartTime",type:"uint256"},{internalType:"uint256",name:"unlockEndTime",type:"uint256"},{internalType:"address payable",name:"withdrawer",type:"address"},{internalType:"uint8",name:"feePaymentMode",type:"uint8"}],name:"lockTokens",outputs:[{internalType:"uint256",name:"lockId",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"address",name:"migratorContract",type:"address"}],name:"migrate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"_feesReceiver",type:"address"},{internalType:"address",name:"_uniToken",type:"address"},{internalType:"address",name:"_master",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!(f=[{name:"eth",http_provider_link:"https://mainnet.infura.io/v3/215b4c430ead45b6bed4559fe163c8fc",chain_name:"ethereum mainnet",native_token:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",native_token_symbol:"ETH",locker_address:"0xdf77a4d44d5fb29bc906e645168fd7c224e1b55d",vt_address:"",vt_fee:.025,explorer:"https://etherscan.com",lp:[{name:"Uniswap",router_address:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",factory_address:"0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",pair_name:"uniswap v2"}],fee:.05,options:{rpc:{1:"https://mainnet.infura.io/v3/215b4c430ead45b6bed4559fe163c8fc"},rpcUrl:"https://mainnet.infura.io/v3/215b4c430ead45b6bed4559fe163c8fc",network:"mainnet",chainId:1}},{name:"polygon",http_provider_link:"https://rpc-mainnet.maticvigil.com/",chain_name:"matic mainnet",native_token:"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",native_token_symbol:"MATIC",locker_address:"0xDc037A4291C7bB878e0299404216f19a71a66E54",vt_address:"",vt_fee:25,explorer:"https://polygonscan.com",lp:[{name:"Quickswap",router_address:"0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff ",factory_address:"0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",pair_name:"uniswap v2"}],fee:50,options:{rpc:{137:"https://rpc-mainnet.maticvigil.com/"},rpcUrl:"https://rpc-mainnet.maticvigil.com/",network:"polygon",chainId:137}},{name:"bsc",http_provider_link:"https://bsc-dataseed.binance.org",chain_name:"binance smart chain mainnet",native_token:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",native_token_symbol:"BNB",locker_address:"0xd2D33161dC72Dd1254c74c44d809F8273304CF8C",vt_address:"0x084F11dF18C62033bcb017F18ced5a2D7f994972",vt_fee:.15,explorer:"https://bscscan.com",lp:[{name:"PancakeSwap",router_address:"0x10ED43C718714eb63d5aA57B78B54704E256024E",factory_address:"0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",pair_name:"Pancake LPs"}],fee:.3,options:{rpc:{56:"https://bsc-dataseed.binance.org/"},rpcUrl:"https://bsc-dataseed.binance.org/",network:"binance",chainId:56}}]),inputs:[{indexed:!0,internalType:"address",name:"instance",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"}],name:"OnInstanceDestruction",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"vestedToken",type:"address"},{indexed:!0,internalType:"address",name:"vestingAddress",type:"address"}],name:"OnInstanceInit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnLockAmountIncreased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newUnlockStartTime",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newUnlockEndTime",type:"uint256"}],name:"OnLockDurationIncreased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"migrator",type:"address"}],name:"OnLockMigration",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OnLockOwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnLockWithdrawal",type:"event"},{anonymous:!1,inputs:[{indexed:!0,
internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"unlockStartTime",type:"uint256"},{indexed:!1,internalType:"uint256",name:"unlockEndTime",type:"uint256"}],name:"OnTokenLock",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"}],name:"OnTokenUnlock",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setEthFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"newFeeReceiver",type:"address"}],name:"setFeeReceiver",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setIncreaseAmountEthFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setIncreaseAmountUniFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_master",type:"address"}],name:"setMasterContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newMigrator",type:"address"}],name:"setMigrator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setUniFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_uniToken",type:"address"}],name:"setUniToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"percent",type:"uint256"}],name:"setVestingTokenFeePercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"address",name:"newOwner",type:"address"}],name:"transferLock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawPartially",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"ethFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"feeReceiver",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"address",name:"bep20Token",type:"address"}],name:"getBEP20TokenBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"}],name:"getBNBBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"}],name:"getTokenBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"increaseAmountEthFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"increaseAmountUniFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lockNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"masterContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"migrator",outputs:[{internalType:"contract IMigrator",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"tokenLocks",outputs:[{internalType:"address",name:"instance",type:"address"},{internalType:"address",name:"vestingToken",type:"address"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"unlockStartTime",type:"uint256"},{internalType:"uint256",name:"unlockEndTime",type:"uint256"},{internalType:"uint256",name:"withdrawnAmount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniToken",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"userLockAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"userLocksLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"vestingTokenFeePercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"vestingToken",type:"address"},{
internalType:"uint256",name:"index",type:"uint256"}],name:"vestingTokenLockAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"vestingToken",type:"address"}],name:"vestingTokenLocksLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],B=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],type:"function"},,{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}]
L=M=D=void 0
const t=window.Web3Modal.default,n=window.WalletConnectProvider.default
async function a(){if(v_info=await o(),0==v_info.status)return console.log("skipping wallet refresh as new account is not compatible"),$("#newlock_connect_wallet_msg").text("Your connected wallet information seems to have changed, please try reconnecting."),$("#newlock_connect_wallet_msg").show(),$("#newlock_connected_wallet").hide(),void $("#newlock_connect_wallet").show()
k(v_info)}function i(e){e.on("accountsChanged",async e=>{await a()}),e.on("chainChanged",async e=>{await a()}),e.on("disconnect",async(e,t)=>{$("#newlock_connect_wallet_msg").text("Wallet Disconnected. Please refresh page."),await $("#newlock_connect_wallet_msg").show()})}async function o(){var e={status:!0,msg:""},t={status:!0,msg:""},n=new Web3(D),a=await n.eth.getChainId()
return(a=evmChains.getChain(a)).name.toLowerCase()!=L.chain_name?(console.log("Not on Mainnet"),t.status=!1,t.msg="Current wallet not on Mainnet"):(await n.eth.getAccounts()).length||(console.log("No account information present"),t.status=!1,t.msg="No account information in current wallet."),0==(e=await t).status||(e=await async function(){var e,t={status:!0,msg:""},n=new Web3(D),a=await n.eth.getAccounts()
if(!a.length)return console.log("No account information present"),t.status=!1,t.msg="No account information in current wallet.",t
for(e=0;e<a.length;){if(n.utils.isAddress(a[e].toLowerCase())){M=a[e]
break}e++}return e>=a.length&&(console.log("No account information present"),t.status=!1,t.msg="No account information in current wallet."),t}()).status,e}$(document).ready(async function(){})
async function s(e){L=f[e],function(){M=D=void 0
var e=L.options,e={walletconnect:{package:n,options:e}}
web3Modal=new t({cacheProvider:!1,providerOptions:e,disableInjectedProvider:!1}),console.log("Web3Modal instance is",web3Modal)}(),v_info=await async function(){var t={status:!0,msg:""}
try{D=await web3Modal.connectTo("injected")}catch(e){return D=void 0,console.log("Could not get injected wallet connection",e),t.status=!1,t.msg="No wallet detected",t}return 0==(t=await o()).status?M=D=void 0:(i(D),k(t)),t}(),0==v_info.status&&($("#newlock_connect_wallet_msg").text("Could not connect. Please check your wallet network."),$("#newlock_connect_wallet_msg").show(),$("#newlock_connected_wallet").hide(),$("#newlock_connect_wallet").show())}C=void 0,g=[]
async function h(e){var t=new Web3(D),e=await(e=new t.eth.Contract(B,e)).methods.allowance(M,L.vt_address).call()
return(t=t.utils.toBN(2).pow(t.utils.toBN(256)).sub(t.utils.toBN(1))).cmp(Web3.utils.toBN(e))<=0}async function r(){var e,t,n,a,i,o,s,l,c,r
for(console.log("get all locks"),e=[],t=new Web3(D),n=M,i=await(a=new t.eth.Contract(I,L.vt_address)).methods.userLocksLength(n).call(),o=0;o<i;)s=await a.methods.userLockAt(n,o).call(),(l=await a.methods.tokenLocks(s).call()).lpToken=l.vestingToken.toLowerCase(),r=await p(l.lpToken),c=await a.methods.getTokenBalance(s).call(),r={id:s,lp_address:l.lpToken,amount:t.utils.toBN(c),status:!0,unlock_time:l.unlockStartTime,vesting_time:l.unlockEndTime,withdrawn_amount:t.utils.toBN(l.withdrawnAmount),lp_info:r},e.push(r),o++
return e}async function d(e,t){var n,a,i,o,s,l,c,r
if(console.log("get all locks"),n=[],o=await(i=new(a=new Web3(L.http_provider_link)).eth.Contract(I,L.vt_address)).methods.lockNonce().call(),!((o=parseInt(o))<e)){for(s=e;s<o&&s<e+t;)(l=await i.methods.tokenLocks(s).call()).lpToken=l.vestingToken.toLowerCase(),l.lpToken.toLowerCase()!=b.toLowerCase()&&(r=await p(l.lpToken),c=await i.methods.getTokenBalance(s).call(),r={id:s,lp_address:l.lpToken,amount:a.utils.toBN(c),status:!0,unlock_time:l.unlockStartTime,vesting_time:l.unlockEndTime,lp_info:r},n.push(r)),s++
return n}}async function p(e){var t,n=e,a=D
if(null==D&&(a=L.http_provider_link),a={address:"",name:"",symbol:"",decimals:0,total_supply:new(e=new Web3(a)).utils.BN(0),valid:!0,err_msg:"",allowance:!1},!e.utils.isAddress(n))return a.err_msg="Not a valid Token address",S("LP token address"+n),a.valid=!1,a
if((await e.eth.getCode(n)).toLowerCase()=="0x".toLowerCase())return a.err_msg="Not a valid Token address",S("LP token code"+n),a.valid=!1,a
try{t=new e.eth.Contract(B,n),a.name=await t.methods.name().call()}catch(e){return a.err_msg="Not a valid Token address",S("LP token exception"+n),a.valid=!1,a}return a.total_supply=e.utils.toBN(await t.methods.totalSupply().call()),a.decimals=await t.methods.decimals().call(),a.symbol=await t.methods.symbol().call(),a.address=n,null!=M&&(a.allowance=await h(n)),a}async function u(e){var t=new Web3(D),e=await(a=new t.eth.Contract(B,e)).methods.balanceOf(M).call(),n=await a.methods.decimals().call(),a=Object.keys(t.utils.unitMap).find(e=>t.utils.unitMap[e]===t.utils.toBN(10).pow(t.utils.toBN(n)).toString()),a=t.utils.fromWei(e,a)
return parseFloat(a),a}async function m(){var e,t
if(C)for(l in e=await u(C),$("#newlock_lptoken_balance_info").text(e),$("#newlock_amount").val(e),percentSwitch(100),t=await r())t[l].lp_address.toLowerCase()==C.toLowerCase()&&$("#newlock_result_info").html("You already have a lock for this LP. See in <a onclick=$('#lock_manage_tab_link').click() href='#tab-2'> My Locks.</a>")}function W(e){$("#newlock_lock_max_amount").prop("disabled",e),$("#newlock_amount").prop("disabled",e),$("#newlock_unlocktime_now").prop("disabled",e),$("#newlock_unlocktime_plus1").prop("disabled",e),$("#newlock_unlocktime").prop("disabled",e),$("#newlock_feeLP").prop("disabled",e),$("#newlock_feeBNB").prop("disabled",e),$("#newlock_lockbutton").prop("disabled",e),$("#newlock_lockbutton_approve").prop("disabled",e),$("#newlock_enablevesting_flag").prop("disabled",e),1==e?($("#newlock_unlocktime_vesting").prop("disabled",!0),$("#myRangeMonthVesting").prop("disabled",!0),$("#vesting-button-1").off("click"),$("#vesting-button-2").off("click"),$("#vesting-button-3").off("click"),$("#vesting-button-4").off("click")):1==$("#newlock_enablevesting_flag").prop("checked")&&($("#newlock_unlocktime_vesting").prop("disabled",!1),$("#myRangeMonthVesting").prop("disabled",!1),$("#vesting-button-1").on("click",function(){monthDivVesting("5")}),$("#vesting-button-2").on("click",function(){monthDivVesting("10")}),$("#vesting-button-3").on("click",function(){monthDivVesting("20")}),$("#vesting-button-4").on("click",function(){monthDivVesting("100")}))}function N(){$("#newlock_amount").val(""),document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours()+24),!0),document.querySelector("#newlock_unlocktime_vesting")._flatpickr.setDate((new Date).setHours((new Date).getHours()+48),!0),$("#newlock_unlocktime_info").text("Will lock for 1 day"),$("#newlock_unlocktime_vesting").prop("disabled",!0),$("#myRangeMonthVesting").prop("disabled",!0),$("#newlock_enablevesting_flag").prop("checked",!1),$("#newlock_unlocktime_vesting_info").text("Vesting is not enabled"),$("#vesting-button-1").off("click"),$("#vesting-button-2").off("click"),$("#vesting-button-3").off("click"),$("#vesting-button-4").off("click"),$("#newlock_feeLP").prop("checked",!1),$("#newlock_feeBNB").prop("checked",!0),$("#newlock_lptoken_info").html("--"),$("#newlock_lptoken_balance_info").text("0"),$("#newlock_lockbutton_approve span").first().text("Approve"),$("#myRangeMonth")[0].value=0,$("#slide-percentage-month")[0].innerText="0%",$("#myRange")[0].value=0,$("#slide-percentage")[0].innerText="0%"}async function _(e){var t,n
try{if($("#newlock_result_info").html(""),$("#newlock_lptoken_info_spinner").show(),N(),e=$("#newlock_lpaddress").val().trim().toLowerCase(),t=new Web3(new Web3.providers.HttpProvider(L.http_provider_link)),42==e.length&&!t.utils.isAddress(e)&&(S("lower case not valid "+e),e=e.toUpperCase(),!t.utils.isAddress(e))){S("upper case not valid "+e)
try{e=t.utils.toChecksumAddress(e),S("checksum case is valid "+t.utils.isAddress(e))}catch(e){S("checksum case is not failed")}}S("New Lock input for: "+e),(n=await p(e)).valid?(C=e,$("#newlock_lptoken_info").html('<a target="_blank" href=https://bscscan.com/token/'+n.address+">"+n.name+" ("+n.symbol+" )</a></a>"),await m(),W(!1),n.allowance?($("#newlock_lockbutton_approve").prop("disabled",!0),$("#newlock_lockbutton_approve span").first().text("Approved")):$("#newlock_lockbutton").prop("disabled",!0)):($("#newlock_lptoken_info").html(n.err_msg),W(!0),S("New LP token fetch failed: "+n.err_msg))}catch(e){console.log(e),S("New LP token fetch failed: "+(null!=e.message?e.message:"Unknown error")),S("New LP token fetch failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#newlock_lptoken_info").text("Something went wrong. Please try again."),W(!0),C=void 0}finally{$("#newlock_lptoken_info_spinner").hide()}}async function k(e){var t
null!=M?($("#newlock_connect_wallet").hide(),$("#newlock_connected_wallet_address").text(M.substring(0,6)+".."+M.substring(M.length-4,M.length)),$("#newlock_connected_wallet").show(),$("#newlock_connect_wallet_msg").hide(),$("#newlock_lpaddress").prop("disabled",!1),$("#newlock_lptoken_info").html("--"),!C||(t=await getLPTokenInfo(C)).valid&&(await m(),t.allowance?($("#newlock_lockbutton_approve").prop("disabled",!0),$("#newlock_lockbutton_approve span").first().text("Approved"),$("#newlock_lockbutton").prop("disabled",!1)):($("#newlock_lockbutton").prop("disabled",!0),$("#newlock_lockbutton_approve").prop("disabled",!1),$("#newlock_lockbutton_approve span").first().text("Approve")))):($("#newlock_connect_wallet").show(),$("#newlock_connected_wallet_address").text(""),$("#newlock_connected_wallet").hide(),$("#newlock_lpaddress").prop("disabled",!0),$("#newlock_connect_wallet_msg").text(e.msg),$("#newlock_connect_wallet_msg").show(),W(!0))}async function w(e,t){var n,a,i,o,s,l,c,r,d,p,u,m,_,k,w,g,v
if(null!=t){$("#lock_certificate_container").show(),$("#lock_certificate_spinner").show(),n=f[0],"polygon"==t.toLowerCase()&&(n=f[1]),"bsc"==t.toLowerCase()&&(n=f[2])
try{if(_=e,k=n,console.log("get lock by LP"),v=k.http_provider_link,(v=await(g=new(w=new Web3(v)).eth.Contract(I,k.vt_address)).methods.tokenLocks(_).call()).lpToken=v.vestingToken.toLowerCase(),k=await async function(e,t){var n,a=e,e=t.http_provider_link,e={address:"",name:"",symbol:"",total_supply:new(t=new Web3(e)).utils.BN(0),valid:!0,err_msg:"",allowance:!1}
if(!t.utils.isAddress(a))return e.err_msg="Not a valid token address",S("Token address"+a),e.valid=!1,e
if((await t.eth.getCode(a)).toLowerCase()=="0x".toLowerCase())return e.err_msg="Not a valid token address",S("LP token code"+a),e.valid=!1,e
try{n=new t.eth.Contract(B,a)}catch(t){return e.err_msg="Not a valid address",S("Token exception"+a),e.valid=!1,e}return e.address=a,e.total_supply=t.utils.toBN(await n.methods.totalSupply().call()),e.symbol=await n.methods.symbol().call(),e.name=await n.methods.name().call(),e.decimals=await n.methods.decimals().call(),null!=M&&(e.allowance=await h(a)),e}(v.lpToken,k),_=await g.methods.getTokenBalance(_).call(),(a=await{lp_address:v.lpToken,amount:w.utils.toBN(_),status:!0,unlock_time:v.unlockStartTime,vesting_time:v.unlockEndTime,lp_info:k}).lp_address.toLowerCase()==b.toLowerCase())return void console.log("no address found")
$("#certificate_network").html(t.toUpperCase()),"eth"==t.toLowerCase()&&$("#network-eth-logo").show(),"polygon"==t.toLowerCase()&&$("#network-polygon-logo").show(),"bsc"==t.toLowerCase()&&$("#network-bsc-logo").show(),new QRCode(document.getElementById("certificate_qrcode"),{text:window.location.origin+window.location.pathname+"?certificate="+e+"&network="+t,width:128,height:128,correctLevel:QRCode.CorrectLevel.H}),$("#certificate_lockerhead").show(),$("#lock_certificate_lptoken").prop("href",n.explorer+"/token/"+a.lp_address),$("#lock_certificate_token0").prop("href",n.explorer+"/token/"+a.lp_info.address),$("#lock_certificate_token0 span").text(a.lp_info.name+" ("+a.lp_info.symbol+")"),o=new(i=new Web3(new Web3.providers.HttpProvider(n.http_provider_link))).utils.BN(0),s=a.lp_info.total_supply,l=[],c=Object.keys(i.utils.unitMap).find(e=>i.utils.unitMap[e]===i.utils.toBN(10).pow(i.utils.toBN(a.lp_info.decimals)).toString()),new Date(1e3*a.unlock_time)>new Date&&(o=o.add(a.amount),l.push({time:new Date(1e3*a.unlock_time),vesting_time:new Date(1e3*a.vesting_time),amount:parseFloat(i.utils.fromWei(a.amount,c))})),r=i.utils.fromWei(o,c),d=i.utils.fromWei(s,c),0!=r?$("#lock_certificate_status").html("<i class='icofont-check-circled' style='font-size: 30px;color:green'></i> Token Locked"):$("#lock_certificate_status").html("<i class='icofont-close-circled' style='font-size: 30px;color:red'></i> Token Unlocked"),$("#lock_certificate_lockpercent .progress-value").text((r/d*100).toFixed(2)+"%"),u=180<(p=parseInt(r/d*360))?"#049dff":90<p?"#fdba04":"#ff0c04",$(".progress.red .progress-bar").prop("style","border-color: "+u),180<p?($.keyframe.define({name:"loading-1",from:{transform:"rotate(0deg)"},to:{transform:"rotate(180deg)"}}),$.keyframe.define({name:"loading-2",from:{transform:"rotate(0deg)"},to:{transform:"rotate("+(p-180)+"deg)"}})):($.keyframe.define({name:"loading-1",from:{transform:"rotate(0deg)"},to:{transform:"rotate("+p+"deg)"}}),$.keyframe.define({name:"loading-2",from:{transform:"rotate(0deg)"},to:{transform:"rotate(0deg)"}})),$("#lock_certificate_lockamount").text(parseFloat(r).toFixed(4)+" tokens out of "+parseFloat(d).toFixed(4)+" locked"),$("#lock_certificate_unlocktime").html(""),m=$("#lock_certificate_unlocktime"),$.each(l,function(e){var t=l[e].time,n=t-new Date,a=l[e].vesting_time,i=a-new Date,o=(l[e].amount/d*100).toFixed(2),s=$("<li />").appendTo(m),n=l[e].amount.toFixed(4)+"("+o+"%) tokens unlock "+moment.duration(n).humanize(!0)
a!=t&&(n=n+", vesting completes "+moment.duration(i).humanize(!0)),$("<small><a/>").text(n).appendTo(s)})}finally{$("#lock_certificate_spinner").hide()}}}function v(e){$("#managelock_optionwithdraw_button").prop("disabled",e),$("#managelock_optionextend_button").prop("disabled",e),$("#managelock_optionincrement_button").prop("disabled",e),$("#managelock_optiontransfer_button").prop("disabled",e),$("#managelock_optionwithdrawreward_button").prop("disabled",e),$("#managelock_optiongeneratelink_button").prop("disabled",e)}function y(){$("#managelock_optionwithdraw_button").on("click",async function(e){var t,n,a,i
$("#managelock_withdraw_input").show(),$("#managelock_withdraw_input").focus(),$("#managelock_withdraw_max_button").show(),$("#managelock_withdraw_available_display").show(),$("#managelock_withdraw_submit_button").show(),$("#managelock_withdraw_max_button").unbind("click"),$("#managelock_withdraw_submit_button").unbind("click"),$("#managelock_withdraw_input").unbind("keyup"),t=$("#managelock_withdraw_submit_button").attr("data-index"),g[t].unlock_time>(new Date).getTime()/1e3?($("#managelock_withdraw_available_display span").text("0"),$("#managelock_withdraw_submit_button").prop("disabled",!0)):g[t].vesting_time<(new Date).getTime()/1e3?($("#managelock_withdraw_available_display span").text($("#lock_list_lockamount").text()),$("#managelock_withdraw_submit_button").prop("disabled",!1)):(i=parseInt((new Date).getTime()/1e3),i-=59,n=new Web3(D),a=g[t].withdrawn_amount.add(g[t].amount).mul(n.utils.toBN(i-g[t].unlock_time)).divn(g[t].vesting_time-g[t].unlock_time),i=Object.keys(n.utils.unitMap).find(e=>n.utils.unitMap[e]===n.utils.toBN(10).pow(n.utils.toBN(g[t].lp_info.decimals)).toString()),0<a.cmp(g[t].withdrawn_amount)?($("#managelock_withdraw_available_display span").text(n.utils.fromWei(a.sub(g[t].withdrawn_amount),i)),$("#managelock_withdraw_submit_button").prop("disabled",!1)):($("#managelock_withdraw_available_display span").text("0"),$("#managelock_withdraw_submit_button").prop("disabled",!0))),$("#managelock_withdraw_submit_button").on("click",async function(e){await async function(){var e,t,n,a,i,o,s,l,c,r,d,p,u
if($("#managelock_withdraw_result").html(""),$("#managelock_withdraw_result").show(),$("#managelock_withdraw_spinner").show(),e=!1,t=new Web3(new Web3.providers.HttpProvider(L.http_provider_link)),n=$("#managelock_withdraw_submit_button").attr("data-index"),$("#managelock_withdraw_available_display span").text()==$("#managelock_withdraw_input").val().trim().toString()&&g[n].vesting_time<(new Date).getTime()/1e3&&(e=!0),i=Object.keys(t.utils.unitMap).find(e=>t.utils.unitMap[e]===t.utils.toBN(10).pow(t.utils.toBN(g[n].lp_info.decimals)).toString()),0==(a=t.utils.toBN(t.utils.toWei($("#managelock_withdraw_input").val().trim(),i))))return $("#managelock_withdraw_result").html("Withdraw amount not set"),void $("#managelock_withdraw_spinner").hide()
v(!0),$("#managelock_withdraw_input").prop("disabled",!0),$("#managelock_withdraw_max_button").prop("disabled",!0),$("#managelock_withdraw_submit_button").prop("disabled",!0),i=g[n].id
try{s=i,l=a,c=e,console.log("unlock token"),r={output:{},status:!0,msg:""},u=new Web3(D),d=M,p=u.utils.toBN(0),u=new u.eth.Contract(I,L.vt_address),c?await u.methods.withdraw(s).send({from:d,value:p}).on("transactionHash",function(e){console.log("Unlock : ",e)}).on("confirmation",function(e,t){console.log("Unlock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){r.status=!1,r.err_msg=e}):await u.methods.withdrawPartially(s,l).send({from:d,value:p}).on("transactionHash",function(e){console.log("Unlock : ",e)}).on("confirmation",function(e,t){console.log("Unlock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){r.status=!1,r.err_msg=e}),(o=await r).status?$("#managelock_withdraw_result").html("Withdraw successful. Please refresh page."):$("#managelock_withdraw_result").html("Withdraw failed: "+o.err_msg)}catch(e){console.log(e),S(i+" Withdraw Lock failed: "+(null!=e.message?e.message:"Unknown error")),S(i+" Withdraw Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_withdraw_result").html("Withdraw failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_withdraw_input").prop("disabled",!1),$("#managelock_withdraw_max_button").prop("disabled",!1),$("#managelock_withdraw_submit_button").prop("disabled",!1),$("#managelock_withdraw_spinner").hide(),v(!1)}}()}),$("#managelock_withdraw_max_button").on("click",function(e){$("#managelock_withdraw_input").val($("#managelock_withdraw_available_display span").text())}),await $("#managelock_withdraw_input").keyup(function(){var e,t=$(this).val()
""!=(t=isNaN(t)&&2<(t=t.replace(/[^0-9\.]/g,"")).split(".").length?t.replace(/\.+$/,""):t)&&0!=$("#managelock_withdraw_available_display span").text()&&(100<(e=(e=t/$("#managelock_withdraw_available_display span").text()*100).toFixed(2))&&(e=100,t=$("#managelock_withdraw_available_display span").text()),$("#myRangeWithdraw")[0].value=e,$("#slide-percentage-withdraw")[0].innerText=e+"%"),$(this).val(t)}),$(this).closest(".Input-Wrapper-manage").find(".content-wrapper-manage").slideToggle()}),$("#managelock_optionextend_button").on("click",async function(e){var t,n,a
$("#managelock_extend_input").show(),$("#managelock_extend_input").focus(),$("#managelock_extend_current_button").show(),$("#managelock_extend_plus1_button").show(),$("#managelock_extend_submit_button").show(),$("#managelock_extend_current_button").unbind("click"),$("#managelock_extend_plus1_button").unbind("click"),$("#managelock_extend_submit_button").unbind("click"),$("#managelock_extend_input").unbind("input"),$("#managelock_extend_enablevesting_flag").unbind("click"),$("#extend-vesting-button-1").unbind("click"),$("#extend-vesting-button-2").unbind("click"),$("#extend-vesting-button-3").unbind("click"),$("#extend-vesting-button-4").unbind("click"),$("#managelock_unlocktime_extend_vesting").unbind("input"),t=$("#managelock_increment_submit_button").attr("data-index"),n=g[t].unlock_time,n=parseInt(n)+60,flatpickr("#managelock_extend_input",{enableTime:!0,dateFormat:"Y-m-d H:i",defaultDate:new Date(1e3*n),minDate:new Date(1e3*(n-59)),allowInput:!0}),a=g[t].vesting_time,a=parseInt(a)+60,flatpickr("#managelock_unlocktime_extend_vesting",{enableTime:!0,dateFormat:"Y-m-d H:i",defaultDate:new Date(1e3*a),minDate:new Date(1e3*(a-59)),allowInput:!0}),$("#managelock_extend_submit_button").on("click",async function(e){await async function(){var e,t,n,a,i,o,s,l,c,r,d,p,u,m,_,k,w
if($("#managelock_extend_result").html(""),$("#managelock_extend_result").show(),e=new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj),t=new Date(document.querySelector("#managelock_unlocktime_extend_vesting")._flatpickr.latestSelectedDateObj),0==(s=$("#managelock_extend_enablevesting_flag").prop("checked"))&&(t=e),a=$("#managelock_extend_submit_button").attr("data-index"),n=new Date(1e3*g[a].unlock_time),o=r=new Date(1e3*g[a].vesting_time),l=t,c=s,r={valid:!0,msg:""},(s=e)<n?(r.msg="Unlock time cannot be decreased.",r.valid=!1):l<o?(r.msg="Vesting time cannot be decreased.",r.valid=!1):(l<s||c&&l==s)&&(r.msg="Vesting time cannot be less than or equal to lock time.",r.valid=!1),r.valid){v(!0),$("#managelock_extent_input").prop("disabled",!0),$("#managelock_extend_submit_button").prop("disabled",!0),$("#managelock_extend_current_button").prop("disabled",!0),$("#managelock_extend_plus1_button").prop("disabled",!0),$("#managelock_extend_spinner").show(),a=$("#managelock_extend_submit_button").attr("data-index"),a=g[a].id
try{d=a,p=e,u=t,console.log("increment unlock time"),m={output:{},status:!0,msg:""},_=new Web3(D),k=M,w=_.utils.toBN(0),await new _.eth.Contract(I,L.vt_address).methods.extendLockTime(d,parseInt(p.getTime()/1e3),parseInt(u.getTime()/1e3)).send({from:k,value:w}).on("transactionHash",function(e){console.log("Extend : ",e)}).on("confirmation",function(e,t){console.log("Extend confirmed")}).on("receipt",function(e){}).on("error",function(e,t){m.status=!1,m.err_msg=e}),(i=await m).status?$("#managelock_extend_result").html("Extend successful. Please refresh page."):$("#managelock_extend_result").html("Extend failed: "+i.err_msg)}catch(e){console.log(e),S(a+" Extend Lock failed: "+(null!=e.message?e.message:"Unknown error")),S(a+" Extend Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_extend_result").html("Extend failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_extent_input").prop("disabled",!1),$("#managelock_extend_submit_button").prop("disabled",!1),$("#managelock_extend_current_button").prop("disabled",!1),$("#managelock_extend_plus1_button").prop("disabled",!1),$("#managelock_extend_spinner").hide(),v(!1)}}else $("#managelock_extend_result").html(r.msg)}()}),$("#managelock_extend_input").on("input",function(){var e=new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj)
"Invalid Date"!=e?(e-=new Date,$("#managelock_extend_info").html("Will lock for "+moment.duration(e).humanize(!1)),e/=2592e6,e=(e=100<(e=(e=Math.abs(Math.round(e)))/60*100)?100:e).toFixed(0),$("#myRangeMonthExtend")[0].value=e,$("#slide-percentage-month-extend")[0].innerText=e+"%"):document.querySelector("#managelock_extend_input")._flatpickr.setDate(new Date(1e3*n),!0)}),$("#managelock_extend_current_button").on("click",function(e){document.querySelector("#managelock_extend_input")._flatpickr.setDate(new Date(1e3*n),!0)}),$("#managelock_extend_plus1_button").on("click",function(e){var t=new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj)
t.setMonth(t.getMonth()+12),document.querySelector("#managelock_extend_input")._flatpickr.setDate(t,!0)}),$("#managelock_extend_enablevesting_flag").on("click",async function(e){1==$("#managelock_extend_enablevesting_flag").prop("checked")?($("#managelock_unlocktime_extend_vesting").prop("disabled",!1),$("#myRangeMonthExtendVesting").prop("disabled",!1),$("#extend-vesting-button-1").on("click",function(){monthDivExtendVesting("5")}),$("#extend-vesting-button-2").on("click",function(){monthDivExtendVesting("10")}),$("#extend-vesting-button-3").on("click",function(){monthDivExtendVesting("20")}),$("#extend-vesting-button-4").on("click",function(){monthDivExtendVesting("100")}),$("#managelock_unlocktime_extend_vesting").trigger("input")):($("#managelock_unlocktime_extend_vesting").prop("disabled",!0),$("#myRangeMonthExtendVesting").prop("disabled",!0),$("#newlock_unlocktime_extend_vesting_info").text("Vesting is not enabled"),$("#extend-vesting-button-1").off("click"),$("#extend-vesting-button-2").off("click"),$("#extend-vesting-button-3").off("click"),$("#extend-vesting-button-4").off("click"))}),$("#managelock_unlocktime_extend_vesting").on("input",function(){var e=new Date(document.querySelector("#managelock_unlocktime_extend_vesting")._flatpickr.latestSelectedDateObj)
"Invalid Date"!=e?(e-=new Date,$("#managelock_unlocktime_extend_vesting_info").html("Will completely vest in "+moment.duration(e).humanize(!1)),e/=2592e6,e=(e=100<(e=(e=Math.abs(Math.round(e)))/60*100)?100:e).toFixed(0),$("#myRangeMonthExtendVesting")[0].value=e,$("#slide-percentage-month-extend-vesting")[0].innerText=e+"%"):document.querySelector("#managelock_unlocktime_extend_vesting")._flatpickr.setDate(new Date(1e3*a),!0)}),$("#managelock_extend_input").trigger("input"),await(g[t].unlock_time==g[t].vesting_time?$("#managelock_extend_enablevesting_flag").prop("checked",!1):($("#managelock_extend_enablevesting_flag").prop("checked",!1),$("#managelock_extend_enablevesting_flag").trigger("click"),$("#managelock_unlocktime_extend_vesting").trigger("input"))),$(this).closest(".Input-Wrapper-manage").find(".content-wrapper-manage").slideToggle()}),$("#managelock_optionincrement_button").on("click",async function(e){var t
$("#managelock_increment_input").show(),$("#managelock_increment_input").focus(),$("#managelock_increment_max_button").show(),$("#managelock_increment_available_display").show(),$("#managelock_increment_submit_button").show(),$("#managelock_increment_feeLP").show(),$("#managelock_increment_feeBNB").show(),$("#managelock_increment_fee_container").show(),$("#managelock_increment_max_button").unbind("click"),$("#managelock_increment_submit_button").unbind("click"),$("#managelock_increment_input").unbind("keyup"),$("#managelock_increment_submit_button").on("click",async function(e){await async function(){var t,n,e,a,i,o,s,l,c,r,d,p
if($("#managelock_increment_result").html(""),$("#managelock_increment_result").show(),t=new Web3(new Web3.providers.HttpProvider(L.http_provider_link)),n=$("#managelock_increment_submit_button").attr("data-index"),a=Object.keys(t.utils.unitMap).find(e=>t.utils.unitMap[e]===t.utils.toBN(10).pow(t.utils.toBN(g[n].lp_info.decimals)).toString()),0!=(e=t.utils.toBN(t.utils.toWei($("#managelock_increment_input").val().trim(),a)))){v(!0),$("#managelock_increment_input").prop("disabled",!0),$("#managelock_increment_submit_button").prop("disabled",!0),$("#managelock_increment_feeLP").prop("disabled",!0),$("#managelock_increment_feeBNB").prop("disabled",!0),$("#managelock_increment_spinner").show(),a=g[n].id
try{o=a,s=e,console.log("increment lock amount"),l={output:{},status:!0,msg:""},c=new Web3(D),r=M,d=c.utils.toBN(0),p=0,d=c.utils.toBN(c.utils.toWei(L.vt_fee.toString(),"ether")),await new c.eth.Contract(I,L.vt_address).methods.increaseLockAmount(o,s,p).send({from:r,value:d}).on("transactionHash",function(e){console.log("Lock : ",e)}).on("confirmation",function(e,t){console.log("Lock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){l.status=!1,l.err_msg=e}),(i=await l).status?$("#managelock_increment_result").html("Increment successful. Please refresh page."):$("#managelock_increment_result").html("Increment failed: "+i.err_msg)}catch(e){console.log(e),S(a+" Increment Lock failed: "+(null!=e.message?e.message:"Unknown error")),S(a+" Increment Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_increment_result").html("Increment failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_increment_input").prop("disabled",!1),$("#managelock_increment_submit_button").prop("disabled",!1),$("#managelock_increment_spinner").hide(),$("#managelock_increment_feeLP").prop("disabled",!1),$("#managelock_increment_feeBNB").prop("disabled",!1),v(!1)}}else $("#managelock_increment_result").html("Increment amount not set")}()}),t=$("#managelock_transfer_submit_button").attr("data-index"),t=await u(g[t].lp_address),$("#managelock_increment_available_display span").text(t),$("#managelock_increment_max_button").on("click",function(e){$("#managelock_increment_input").val($("#managelock_increment_available_display span").text())}),$("#managelock_increment_fee_info").text("Flat Fee: "+L.vt_fee+" "+L.native_token_symbol),await $("#managelock_increment_input").keyup(function(){var e,t=$(this).val()
""!=(t=isNaN(t)&&2<(t=t.replace(/[^0-9\.]/g,"")).split(".").length?t.replace(/\.+$/,""):t)&&0!=$("#managelock_increment_available_display span").text()&&(100<(e=(e=t/$("#managelock_increment_available_display span").text()*100).toFixed(2))&&(e=100,t=$("#managelock_increment_available_display span").text()),$("#myRangeIncrement")[0].value=e,$("#slide-percentage-increment")[0].innerText=e+"%"),$(this).val(t)}),$(this).closest(".Input-Wrapper-manage").find(".content-wrapper-manage").slideToggle()}),$("#managelock_optiontransfer_button").on("click",async function(e){$("#managelock_transfer_input").show(),$("#managelock_transfer_input").focus(),$("#managelock_transfer_submit_button").show(),$("#managelock_transfer_submit_button").unbind("click"),await $("#managelock_transfer_submit_button").on("click",async function(e){await async function(){var e,t,n,a,i,o,s,l,c
if($("#managelock_transfer_result").html(""),$("#managelock_transfer_result").show(),t=new Web3(new Web3.providers.HttpProvider(L.http_provider_link)),e=(e=$("#managelock_transfer_input").val().trim()).toLowerCase(),t.utils.isAddress(e)){v(!0),$("#managelock_transfer_input").prop("disabled",!0),$("#managelock_transfer_submit_button").prop("disabled",!0),$("#managelock_transfer_spinner").show(),t=$("#managelock_transfer_submit_button").attr("data-index"),t=g[t].id
try{a=t,i=e,console.log("transfer owner"),o={output:{},status:!0,msg:""},s=new Web3(D),l=M,c=s.utils.toBN(0),await new s.eth.Contract(I,L.vt_address).methods.transferLock(a,i).send({from:l,value:c}).on("transactionHash",function(e){console.log("transfer : ",e)}).on("confirmation",function(e,t){console.log("Transfer confirmed")}).on("receipt",function(e){}).on("error",function(e,t){o.status=!1,o.err_msg=e}),(n=await o).status?$("#managelock_transfer_result").html("Transfer successful. Please refresh page."):$("#managelock_transfer_result").html("Transfer failed: "+n.err_msg)}catch(e){console.log(e),S(t+" Transfer Lock failed: "+(null!=e.message?e.message:"Unknown error")),S(t+" Transfer Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_transfer_result").html("Transfer failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_transfer_input").prop("disabled",!1),$("#managelock_transfer_submit_button").prop("disabled",!1),$("#managelock_transfer_spinner").hide(),v(!1)}}else $("#managelock_transfer_result").html("New owner is not a valid address")}()}),$(this).closest(".Input-Wrapper-manage").find(".content-wrapper-manage").slideToggle()}),$("#managelock_optionwithdrawreward_button").on("click",async function(e){$("#managelock_withdrawreward_input").show(),$("#managelock_withdrawreward_input").focus(),$("#managelock_withdrawreward_input").unbind("keyup"),$("#managelock_withdrawreward_submit_button").attr("data-index"),$("#managelock_withdrawreward_submit_button").on("click",async function(e){await async function(){var e,t,n,a,i,o,s,l,c,r,d,p,u,m
if($("#managelock_withdrawreward_result").html(""),$("#managelock_withdrawreward_result").show(),t=new Web3(new Web3.providers.HttpProvider(L.http_provider_link)),"bnb"==(e=(e=$("#managelock_withdrawreward_input").val().trim()).toLowerCase())||t.utils.isAddress(e)){v(!0),$("#managelock_withdrawreward_input").prop("disabled",!0),$("#managelock_withdrawreward_submit_button").prop("disabled",!0),$("#managelock_withdrawreward_spinner").show(),t=$("#managelock_withdrawreward_submit_button").attr("data-index"),t=g[t].id
try{(n="bnb"==e?(r=t,console.log("withdraw reward token"),d={output:{},status:!0,msg:""},p=new Web3(D),u=M,m=p.utils.toBN(0),await new p.eth.Contract(I,L.vt_address).methods.claimBNBAll(r).send({from:u,value:m}).on("transactionHash",function(e){console.log("transfer : ",e)}).on("confirmation",function(e,t){console.log("Transfer confirmed")}).on("receipt",function(e){}).on("error",function(e,t){d.status=!1,d.err_msg=e}),await d):(a=t,i=e,console.log("withdraw reward token"),o={output:{},status:!0,msg:""},s=new Web3(D),l=M,c=s.utils.toBN(0),await new s.eth.Contract(I,L.vt_address).methods.claimBEP20TokenAll(a,i).send({from:l,value:c}).on("transactionHash",function(e){console.log("transfer : ",e)}).on("confirmation",function(e,t){console.log("Transfer confirmed")}).on("receipt",function(e){}).on("error",function(e,t){o.status=!1,o.err_msg=e}),await o)).status?$("#managelock_withdrawreward_result").html("Withdraw successful."):$("#managelock_withdrawreward_result").html("Withdraw failed: "+n.err_msg)}catch(e){console.log(e),S(t+" Withdraw failed: "+(null!=e.message?e.message:"Unknown error")),S(t+" Withdraw failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_withdrawreward_result").html("Withdraw failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_withdrawreward_input").prop("disabled",!1),$("#managelock_withdrawreward_submit_button").prop("disabled",!1),$("#managelock_withdrawreward_spinner").hide(),v(!1)}}else $("#managelock_withdrawreward_result").html("Token is not a valid address")}()}),$("#managelock_withdrawreward_input").on("input",async function(e){await A()}),await $("#managelock_withdrawreward_input").on("keypress",async function(e){13==e.which&&await A()}),$(this).closest(".Input-Wrapper-manage").find(".content-wrapper-manage").slideToggle()}),$("#managelock_optiongeneratelink_button").on("click",async function(e){$("#managelock_generatelink_display").show(),$("#managelock_generatelink_display").focus(),$("#managelock_generatelink_display").prop("href",window.location.origin+window.location.pathname+"?certificate="+$("#managelock_generatelink_display").attr("data-address")+"&network="+L.name),await $("#managelock_generatelink_display").html("<i class='icofont-share'></i>Lock Certificate Link"),$(this).closest(".Input-Wrapper-manage").find(".content-wrapper-manage").slideToggle()}),$(".content-wrapper-manage").hide()}async function x(){var e,t,n,a,s=new Web3(new Web3.providers.HttpProvider(L.http_provider_link)),i=$("#lock-list")
if(i.html(""),null!=M){$("#managelock_spinner").show(),g=[]
try{for(l in 0==(e=await r()).length&&i.text("You have no locks with this wallet!"),e)t=e[l],n=$("<li />").appendTo(i),a=$('<a data-toggle="collapse" class="" href="#list-lock'+l+'"/>').appendTo(n),parseInt(l),a.text("Token: "+t.lp_info.name+" ("+t.lp_info.symbol+")"),$('<i class="icofont-simple-down"/>').appendTo(a),$('<div data-index="'+l+'"id="list-lock'+l+'" class="collapse " data-parent=".lock-list" />').appendTo(i),l++
$(".lock-list .collapse").on("shown.bs.collapse",function(e){var t,n,a,i,o
$(".lock-list .collapse").each(function(e){$(this).html("")}),$("#"+$(e.target).attr("id")).html(c),t=g[$(e.target).attr("data-index")],o=Object.keys(s.utils.unitMap).find(e=>s.utils.unitMap[e]===s.utils.toBN(10).pow(s.utils.toBN(t.lp_info.decimals)).toString()),$("#lock_list_lockamount").text(s.utils.fromWei(t.amount,o)),a=(n=new Date(1e3*t.unlock_time))-new Date,o=(i=new Date(1e3*t.vesting_time))-new Date,$("#lock_list_unlocktime").text(n.toLocaleString()+" ("+moment.duration(a).humanize(!0)+")"),$("#lock_list_vestingtime").text(i.toLocaleString()+" ("+moment.duration(o).humanize(!0)+")"),$("#managelock_generatelink_display").attr("data-address",$(e.target).attr("data-index")),$("#lock_list_lptoken").prop("href","https://bscscan.com/token/"+t.lp_address),$("#lock_list_token0").prop("href","https://bscscan.com/token/"+t.lp_info.address),$("#lock_list_token0 span").text(t.lp_info.symbol),e=$(e.target).attr("data-index"),$("#managelock_withdraw_submit_button").attr("data-index",e),$("#managelock_extend_submit_button").attr("data-index",e),$("#managelock_increment_submit_button").attr("data-index",e),$("#managelock_transfer_submit_button").attr("data-index",e),$("#managelock_withdrawreward_submit_button").attr("data-index",e),y()}),g=e}catch(e){i.text("Something went wrong!"),console.log(e),S(M+" Get Lock List failed: "+(null!=e.message?e.message:"Unknown error")),S(M+" Get Lock List failed stack: "+(null!=e.stack?e.stack:"Unknown stack"))}finally{$("#managelock_spinner").hide()}}else i.text("Please connect wallet to see locks.")}async function T(){var e,t,n,a,i,o,s,c=$("#browse-locks-list")
c.html(""),$("#browselock_spinner").show(),e=0
try{for(t=await d(e,1);null!=t;){for(l in t)n=t[l],a=$('<li style="top-margin:10px;background-color:#ffe6e6;"/>').appendTo(c),(i=$('<a target="_blank" href="" />').appendTo(a)).prop("href",window.location.origin+window.location.pathname+"?certificate="+n.id+"&network="+L.name),$("<span/>").appendTo(i).text(n.lp_info.name+" ("+n.lp_info.symbol+")"),o=$('<span style="font-size:14px"/>').appendTo(a),s=new Date(1e3*n.unlock_time)-new Date,o.text("starts unlocking in "+moment.duration(s).humanize(!0)),l++
t=await d(e+=1,1)}}catch(e){c.text("Something went wrong. Please refresh page!"),console.log(e),S(M+" Browse Lock List failed: "+(null!=e.message?e.message:"Unknown error")),S(M+" Browse Lock List failed stack: "+(null!=e.stack?e.stack:"Unknown stack"))}finally{$("#browselock_spinner").hide()}}function S(e){try{$.post("/api/log/",{address:e})}catch(e){console.log(e)}}$(document).ready(async function(){var e
s(2),flatpickr("#newlock_unlocktime",{enableTime:!0,dateFormat:"Y-m-d H:i",defaultDate:(new Date).setHours((new Date).getHours()+24),minDate:(new Date).setHours((new Date).getHours()+12),allowInput:!0}),flatpickr("#newlock_unlocktime_vesting",{enableTime:!0,dateFormat:"Y-m-d H:i",defaultDate:(new Date).setHours((new Date).getHours()+48),minDate:(new Date).setHours((new Date).getHours()+12),allowInput:!0}),$('a[data-toggle="tab"]').on("shown.bs.tab",async function(e){"#tab-2"==$(e.target).attr("href")&&await x(),"#browse-locks"==$(e.target).attr("href")&&await T()}),$("#newlock_lpaddress").on("input",async function(e){await _()}),$("#newlock_lpaddress").on("keypress",async function(e){13==e.which&&await _()}),$("#newlock_lock_max_amount").on("click",function(e){$("#newlock_amount").val($("#newlock_lptoken_balance_info").text())}),$("#newlock_amount").keyup(function(){var e,t=$(this).val()
""!=(t=isNaN(t)&&2<(t=t.replace(/[^0-9\.]/g,"")).split(".").length?t.replace(/\.+$/,""):t)&&0!=$("#newlock_lptoken_balance_info").text()&&(100<(e=(e=t/$("#newlock_lptoken_balance_info").text()*100).toFixed(2))&&(e=100,t=$("#newlock_lptoken_balance_info").text()),$("#myRange")[0].value=e,$("#slide-percentage")[0].innerText=e+"%"),$(this).val(t)}),$("#newlock_unlocktime").on("input",function(){var e=new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj)
"Invalid Date"!=e?(e-=new Date,$("#newlock_unlocktime_info").html("Will lock for "+moment.duration(e).humanize(!1)),e/=2592e6,e=(e=100<(e=(e=Math.abs(Math.round(e)))/60*100)?100:e).toFixed(0),$("#myRangeMonth")[0].value=e,$("#slide-percentage-month")[0].innerText=e+"%"):document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours()+24),!0)}),$("#newlock_unlocktime_vesting").on("input",function(){var e=new Date(document.querySelector("#newlock_unlocktime_vesting")._flatpickr.latestSelectedDateObj)
"Invalid Date"!=e?(e-=new Date,$("#newlock_unlocktime_vesting_info").html("Will completely vest in "+moment.duration(e).humanize(!1)),e/=2592e6,e=(e=100<(e=(e=Math.abs(Math.round(e)))/60*100)?100:e).toFixed(0),$("#myRangeMonthVesting")[0].value=e,$("#slide-percentage-month-vesting")[0].innerText=e+"%"):document.querySelector("#newlock_unlocktime_vesting")._flatpickr.setDate((new Date).setHours((new Date).getHours()+48),!0)}),$("#newlock_enablevesting_flag").on("click",async function(e){1==$("#newlock_enablevesting_flag").prop("checked")?($("#newlock_unlocktime_vesting").prop("disabled",!1),$("#myRangeMonthVesting").prop("disabled",!1),$("#vesting-button-1").on("click",function(){monthDivVesting("5")}),$("#vesting-button-2").on("click",function(){monthDivVesting("10")}),$("#vesting-button-3").on("click",function(){monthDivVesting("20")}),$("#vesting-button-4").on("click",function(){monthDivVesting("100")}),$("#newlock_unlocktime_vesting").trigger("input")):($("#newlock_unlocktime_vesting").prop("disabled",!0),$("#myRangeMonthVesting").prop("disabled",!0),$("#newlock_unlocktime_vesting_info").text("Vesting is not enabled"),$("#vesting-button-1").off("click"),$("#vesting-button-2").off("click"),$("#vesting-button-3").off("click"),$("#vesting-button-4").off("click"))}),$("#newlock_unlocktime_now").on("click",function(e){document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours()+24),!0)}),$("#newlock_unlocktime_plus1").on("click",function(e){var t=new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj)
t.setMonth(t.getMonth()+12),document.querySelector("#newlock_unlocktime")._flatpickr.setDate(t,!0)}),$("#newlock_lockbutton").on("click",async function(e){await async function(e){var t,n,a,i,o,s,l,c,r,d,p,u,m,_,k,w,g,v,f,b,h,y,x,T
W(!0),$("#newlock_lpaddress").prop("disabled",!0),$("#newlock_lockbutton_spinner").show(),$("#newlock_result_info").html(""),t=new Web3(new Web3.providers.HttpProvider(L.http_provider_link))
try{if(e=$("#newlock_lpaddress").val().trim().toLowerCase(),n=new t.eth.Contract(B,e),a=await n.methods.decimals().call(),i=Object.keys(t.utils.unitMap).find(e=>t.utils.unitMap[e]===t.utils.toBN(10).pow(t.utils.toBN(a)).toString()),o=t.utils.toBN(t.utils.toWei($("#newlock_amount").val().trim(),i)),s=new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj),l=new Date(document.querySelector("#newlock_unlocktime_vesting")._flatpickr.latestSelectedDateObj),0==(c=$("#newlock_enablevesting_flag").prop("checked"))&&(l=s),42==e.length&&!t.utils.isAddress(e)&&(S("lower case not valid "+e),e=e.toUpperCase(),!t.utils.isAddress(e))){S("upper case not valid "+e)
try{e=t.utils.toChecksumAddress(e),S("checksum case is valid "+t.utils.isAddress(e))}catch(e){S("checksum case is not failed")}}if(S("New Lock submit for amount: "+o+" time: "+s+"fee: BNBadress: "+e),b=o,h=s,y=l,x=c,T={valid:!0,msg:""},null==e?(T.msg="LP Token address not set.",T.valid=!1):0==b?(T.msg="LP Token amount not set.",T.valid=!1):h<(b=(b=new Date).setHours(b.getHours()+12))?(T.msg="Unlock time too soon.",T.valid=!1):y<(b=(b=new Date).setHours(b.getHours()+12))?(T.msg="Vesting time too soon.",T.valid=!1):(y<h||x&&y==h)&&(T.msg="Vesting time cannot be less than or equal to lock time.",T.valid=!1),(r=T).valid)if(p=e,u=o,m=s,_=l,console.log("lock token"),k={output:{},status:!0,msg:""},w=new Web3(D),g=M,v=w.utils.toBN("0"),f=0,v=w.utils.toBN(w.utils.toWei(L.vt_fee.toString(),"ether")),await new w.eth.Contract(I,L.vt_address).methods.lockTokens(p,u,parseInt(m.getTime()/1e3),parseInt(_.getTime()/1e3),g,f).send({from:g,value:v}).on("transactionHash",function(e){console.log("Lock : ",e)}).on("confirmation",function(e,t){console.log("Lock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){k.status=!1,k.err_msg=e}),(d=await k).status){$("#newlock_result_info").html("Lock successfully created. <a onclick=$('#lock_manage_tab_link').click() href='#tab-2'>View in My Locks.</a>")
try{$("#newlock_lpaddress").val(""),C=void 0,N()}catch(e){S("Minor New Lock failed: "+(null!=e.message?e.message:"Unknown error")),S("Minor New Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack"))}}else console.log(d.err_msg),$("#newlock_result_info").html(d.err_msg),S("New Lock failed: "+d.err_msg),W(!1),$("#newlock_lockbutton_approve").prop("disabled",!0)
else $("#newlock_result_info").html(r.msg),W(!1),$("#newlock_lockbutton_approve").prop("disabled",!0)}catch(e){console.log(e),S("New Lock failed: "+(null!=e.message?e.message:"Unknown error")),S("New Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#newlock_result_info").html("Lock could not be created: "+(null!=e.message?e.message:"Unknown error")),W(!1),$("#newlock_lockbutton_approve").prop("disabled",!0)}finally{$("#newlock_lpaddress").prop("disabled",!1),$("#newlock_lockbutton_spinner").hide()}}()}),$("#newlock_lockbutton_approve").on("click",async function(e){await async function(){var e,t,n,a,i,o
W(!0),$("#newlock_lpaddress").prop("disabled",!0),$("#newlock_lockbutton_approve_spinner").show(),$("#newlock_result_info").html("")
try{t=C,n={output:{},status:!0,msg:""},i=new(a=new Web3(D)).eth.Contract(B,t),o=a.utils.toBN(2).pow(a.utils.toBN(256)).sub(a.utils.toBN(1)),await a.eth.sendTransaction({from:a.utils.toChecksumAddress(M),to:a.utils.toChecksumAddress(t),data:i.methods.approve(a.utils.toChecksumAddress(L.vt_address),o).encodeABI()}).on("transactionHash",function(e){console.log("Approve : ",e)}).on("confirmation",function(e,t){console.log("Approve confirmed")}).on("receipt",function(e){}).on("error",function(e,t){n.status=!1,n.err_msg=e}),(e=await n).status?($("#newlock_result_info").html("Approved"),$("#newlock_lockbutton_approve").prop("disabled",!0),$("#newlock_lockbutton_approve span").first().text("Approved"),$("#newlock_lockbutton").prop("disabled",!1)):($("#newlock_result_info").html("Approval failed: "+e.err_msg),$("#newlock_lockbutton").prop("disabled",!0))}catch(e){console.log(e),S(C+" Approval failed: "+(null!=e.message?e.message:"Unknown error")),S(C+" Approval failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#newlock_result_info").html("Approval failed: "+(null!=e.message?e.message:"Unknown error")),$("#newlock_lockbutton").prop("disabled",!0)}finally{$("#newlock_lockbutton_approve_spinner").hide(),$("#newlock_lpaddress").prop("disabled",!1),o=$("#newlock_lockbutton").prop("disabled"),e=$("#newlock_lockbutton_approve").prop("disabled"),W(!1),$("#newlock_lockbutton").prop("disabled",o),$("#newlock_lockbutton_approve").prop("disabled",e)}}()}),$("#newlock_connect_wallet").on("click",async function(e){await async function(){var t={status:!0,msg:""}
try{D=await web3Modal.connect()}catch(e){return D=void 0,console.log("Could not get injected wallet connection",e),t.status=!1,t.msg="No wallet detected",t}return 0==(t=await o()).status?M=D=void 0:(i(D),k(t)),t}()}),$("input[type=radio][name=network-options]").change(async function(){$("#newlock_lpaddress").val(""),$("#newlock_lpaddress").prop("disabled",!0),N(),s(this.value),$("#newlock_fee_info").text("Flat Fee: "+f[this.value].fee+" "+f[this.value].native_token_symbol),"nav-link active"==$('a[data-toggle="tab"][href="#tab-2"').prop("class")&&await x(),"nav-link active"==$('a[data-toggle="tab"][href="#browse-locks"').prop("class")&&await T()}),new URLSearchParams(window.location.search).has("certificate")&&(e=new URLSearchParams(window.location.search),$('a[href="#certificate"]').show(),$('a[href="#certificate"]').tab("show"),document.querySelector("#services-locker").scrollIntoView({behavior:"smooth"}),await w(e.get("certificate"),e.get("network")))})
async function A(){var e,t
try{if("bnb"==(e=$("#managelock_withdrawreward_input").val().trim().toLowerCase()).toLowerCase())return void $("#managelock_withdrawreward_info").text("BNB")
$("#managelock_withdrawreward_info").text(""),$("#managelock_withdrawreward_info_spinner").show(),(t=await p(e)).valid?($("#managelock_withdrawreward_info_spinner").hide(),$("#managelock_withdrawreward_info").text(t.name+"("+t.symbol+")")):($("#managelock_withdrawreward_info_spinner").hide(),$("#managelock_withdrawreward_info").html(t.err_msg))}catch(e){console.log(e),$("#managelock_withdrawreward_info_spinner").hide(),$("#managelock_withdrawreward_info").text("Something went wrong. Please try again.")}}c=`                 

<div class="main-box">
<div class="container inner-box">
    <div class="form-group row text-left">
    <div class="col-lg-12">

    <a target="_blank" href="" id="lock_list_lptoken" style="display:inline"><span>Token </span></a>:
    <a target="_blank" href="" id="lock_list_token0" style="display:inline"><span >--</span></a>
    </div>
    <div class="col-lg-12">
    <b>Locked Amount:&nbsp;</b><span id="lock_list_lockamount">---</span>
    </div>
    <div class="col-lg-12">
    <b>Lock Period:&nbsp;</b><span id="lock_list_unlocktime"  style="list-style: none" >--</span>
    </div>
    <div class="col-lg-12">
    <b>Vesting Complete Period:&nbsp;</b><span id="lock_list_vestingtime"  style="list-style: none" >--</span>
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
            <div>Please ensure you have withdrawn reward tokens from the lock before withdrawing locked tokens.</div>
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
            <div class="text-left">
            <input type="checkbox" id="managelock_extend_enablevesting_flag">Enable Vesting
          </div>
          <br/>
          <div class="">
            <div class="top-Bar">
                <div class="left-date-Side">
                    <!-- <div class="date-head">
                        26th Mar 2022 6:27 PM
                    </div> -->
                    <input id="managelock_unlocktime_extend_vesting" class="date-head" placeholder="2021-10-10 10:10" disabled>
                    <p class="error-text text-left" style="display:none">Please enter a valid data</p>
                </div>
                <div class="right-Side">
                    <div class="right-head" id="managelock_unlocktime_extend_vesting_info">
                        Vesting is not enabled
                    </div>
                </div>
            </div>
            <div class="slidecontainer">
                <input type="range" min="0" max="100" value="0" class="slider" onchange="sliderChangeMonthExtendVesting()" id="myRangeMonthExtendVesting" disabled>
            </div>
            <div class="slide-bottom">
                <div class="slide-percentage" id="slide-percentage-month-extend-vesting">
                    0%
                </div>
            </div>
            <div class="slide-percent-bottom">
                <div class="col-lg-12 row slide-percent-head">
                    <div class="col-xs-12 col-sm-3 percenttag">
                        <div class="percentageDiv" id="extend-vesting-button-1" onclick="">
                            3 Months
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-3 percenttag">
                        <div class="percentageDiv" id="extend-vesting-button-2" onclick="">
                            6 Months
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-3 percenttag">
                        <div class="percentageDiv" id="extend-vesting-button-3" onclick="">
                            1 Year
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-3 percenttag">
                        <div class="percentageDiv" id="extend-vesting-button-4" onclick="">
                            5 Years
                        </div>
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
    <div class="Input-title Input-title-manage text-left" id="managelock_optionwithdrawreward_button">
        <b>Withdraw Reward Tokens</b>
    </div>
    <div class="content-wrapper content-wrapper-manage">
        <div class="first-box">               
            <div class="inputText">
                <input id="managelock_withdrawreward_input" placeholder="Enter reward token address"  class="input-field">
                <p class="error-text text-left" style="display:none">Please enter a valid data</p>
            </div>
            <img id="managelock_withdrawreward_info_spinner" src="/static/assets/img/inputloader.gif" class="right-input-loading" style="display:none"/> 
            <div class="first-right-box" id="managelock_withdrawreward_info" style="display:block">                                 
            </div>
        </div>
        <div class="slide-percent-bottom">
        <div class="col-lg-12 row slide-percent-head">
            <div class="col-xs-6 col-sm-3 percenttag">
                <div class="percentageDiv" onclick="switchRewardToken('BNB')">
                    BNB
                </div>
            </div>
            <div class="col-xs-6 col-sm-3 percenttag">
                <div class="percentageDiv" onclick="switchRewardToken('0xe9e7cea3dedca5984780bafc599bd69add087d56')">
                    BUSD
                </div>
            </div>
        </div>
    </div>
        <div class="col-lg-3 offset-lg-4">
            <button class="btn btn-primary" id="managelock_withdrawreward_submit_button" style="margin-bottom: 5px;">
            <span>Withdraw</span>
            <span id ="managelock_withdrawreward_spinner" style="display:none"
            class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
                            
        </div>
        <span id ="managelock_withdrawreward_result"></span>
        
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