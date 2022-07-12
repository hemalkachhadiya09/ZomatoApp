function loadCoupon()
{
    document.getElementById("Coupon").style.display="block"
}
function closeCoupon()
{
    document.getElementById("Coupon").style.display="none"
}
function demoExternal()
{
    if(confirm('Are you sure for logout  from the web?'))
    {
        alert('You are logged out')
    }
    else
    {
        alert('Try!!sorry you can\'t logged out' )
    }
}