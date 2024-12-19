// مرجع إلى شاشة العرض
const display = document.getElementById('display');

// لإضافة قيمة إلى شاشة العرض
function appendValue(value) {
    display.value += value;
}

// لمسح شاشة العرض
function clearDisplay() {
    display.value = '';
}

// لحساب التعبير الموجود في شاشة العرض
function calculate() {
    try {
        display.value = eval(display.value); // تقييم التعبير الرياضي
    } catch (error) {
        display.value = 'خطأ'; // في حالة وجود خطأ في الحساب
    }
}
