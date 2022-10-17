// ============Prograss Bar===============

const one = document.querySelector('.one');
const oneItems = document.querySelector('.oneItems');
const two = document.querySelector('.two');
const twoItems = document.querySelector('.twoItems');
const three = document.querySelector('.three');
const threeItems = document.querySelector('.threeItems');

one.addEventListener('click', function(){
   
    one.classList.remove('border-l-blue-500');
    one.classList.add('border-l-orange-500');
    oneItems.classList.add('fa-check');
    oneItems.classList.add('bg-orange-500');
    oneItems.classList.remove('fa-chart-pie');
    oneItems.classList.remove('bg-blue-500');
    
    two.classList.add('border-l-blue-500');
    two.classList.remove('border-l-orange-500');
    twoItems.classList.add('bg-blue-500');
    twoItems.classList.remove('bg-orange-500');
    twoItems.classList.remove('fa-check');
    twoItems.classList.add('fa-sack-dollar');
    
    three.classList.remove('border-l-orange-500');
    threeItems.classList.add('bg-blue-500');
    threeItems.classList.remove('bg-orange-500');
    threeItems.classList.remove('fa-check');
    threeItems.classList.add('fa-sack-dollar');
   
})

two.addEventListener('click', function(){
    one.classList.add('border-l-orange-500');
    one.classList.remove('border-l-blue-500');
    oneItems.classList.add('bg-orange-500');
    oneItems.classList.remove('bg-blue-500');
    oneItems.classList.add('fa-check');
    oneItems.classList.remove('fa-chart-pie');
    
    two.classList.add('border-l-orange-500');
    two.classList.remove('border-l-blue-500');
    twoItems.classList.add('bg-orange-500');
    twoItems.classList.add('fa-check');
    twoItems.classList.remove('fa-sack-dollar');
    twoItems.classList.remove('bg-blue-500');
    
    three.classList.add('border-l-blue-500');
    three.classList.remove('border-l-orange-500');
    threeItems.classList.add('bg-blue-500');
    threeItems.classList.remove('bg-orange-500');
    threeItems.classList.remove('fa-check');
    threeItems.classList.add('fa-sack-dollar');
   
})

three.addEventListener('click', function(){
    one.classList.add('border-l-orange-500');
    one.classList.remove('border-l-blue-500');
    oneItems.classList.add('bg-orange-500');
    oneItems.classList.remove('bg-blue-500');
    oneItems.classList.add('fa-check');
    oneItems.classList.remove('fa-chart-pie');
    
    two.classList.add('border-l-orange-500');
    two.classList.remove('border-l-blue-500');
    twoItems.classList.add('bg-orange-500');
    twoItems.classList.remove('bg-blue-500');
    twoItems.classList.add('fa-check');
    threeItems.classList.add('fa-sack-dollar');
    
    threeItems.classList.add('bg-orange-500');
    threeItems.classList.remove('bg-blue-500');
    threeItems.classList.add('fa-check');
    threeItems.classList.remove('fa-sack-dollar');
   
})