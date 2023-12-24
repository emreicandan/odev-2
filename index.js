/*  
                                                Çözüm: Kullanıcan 2 farklı değer istedim. 
let x =Number(prompt(`Lütfen bir x değeri giriniz?`)); sonra bir döngü oluşturdum x değeri n değerinden küçük olduğu sürece artsın dedim.
let n =Number(prompt(`Lütfen bir n değeri giriniz?`)); ve consol'a yazsın dedim ve aradaki bütün sayıları yazdırdım.
for(x;x<n;x++){
    console.log(x)
 }*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/* 2- klavyeden girilecek olan n değerine kadar fibonecci dizisini bulan algoritma

let n = Number(prompt(`Lütfen bir n değeri giriniz?`)) Çözüm: Kullanıcıdan bir n değeri alırım ve sonrasında fibonecci dizisinin ilk 2 değerini x ve y olarak
let x=0;                                            değişkenlere tanımlarım.
let y=1;                                            Sonrasında bir döngü tanımlarım ve n değerim kadar dön derim.
for(let i =0;i<n;i++){                              consol'a her döngüde x değerini yazdırırım o bizim fibonecci değerimizi güncel olarak verir.
    console.log(x);                                 geçici bir değişken tanımladım ve ona x değerini atadım bir sonraki değer hesaplanırken mevcudu tutar
    let x2 = x;                                     sonrasında x değerimizle y değerimizi eşitlerim x bir sonraki fibonecci sayısı olur 
    x = y ;                                         en son y değişkeninde x güncel sayı ve x2 bir önceki sayıyı toplar ve güncelleriz. 
    y = x + x2
}
console.log(x);
*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/*3- Klavyeden girilen sayının tüm tam bölenlerini bulan listeleyen algoritma.
                                                Çözüm : kullanıcıdan bir x değeri aldım ve sonrasında bir döngü oluşturdum ve bu x değerine eşit olana
 let x = Number(prompt(`Lütfen bir x değeri giriniz?`)) kadar artsın dedim ve sonrasında mod alma ile bir koşul oluşturdum . tam bölenler olduğu için
    for(let i = 1 ; i <= x ; i++){                      0 kalanı olanları consola yazdır dedim.
        if(x%i==0){
            console.log(i)
        }
    }
*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/* 4-Klavyeden girilen 3 sayının büyüklük sıralamasına göre ortadakini bulunuz

let x = +prompt("x");                   Çözüm : kullanıcıdan 3  tane değer alırız ve sonrasında bu üç değerin her birini koşul ile kontrol ederiz
let y = +prompt("y");                          koşullara girer x değerini kontrol eder ortanca değilse y değerine geçer ortanca değilse son olarak
let z = +prompt("z");                          z değerine girer ve bu şekilde ortanca değeri bulur.

if(x > y && x < z || x>z && x < y){
    console.log(`ortanca sayı ${x}`)
};
 if(y > x && y < z || y < x && y > z){
         console.log(`ortanca sayı ${y}`)
 };
if(z > x && z < y || z < x && z > y){
    console.log(`ortanca sayı ${z}`)
};
*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/* 5 klavyeden girilen a ve b değerini çarpma işlemi kullanmadan sadece toplama ve çıkartma işlemi kullanarak çarpma işlemini gerçekleştirin.

let sonuc = 0                                          Çözüm : sonuç adında bir değişken oluşturdum ve ona başlangıç değeri olarak 0 değerini verdim.
let a = Number(prompt(`Lütfen bir pozitif a değeri giriniz.`)) sonrasında kullanıcıdan 2 tane Number tipinde değer aldım.
let b = Number(prompt(`Lütfen bir pozitif b değeri giriniz.`))
for(let i = 0; i < b ; i++){                                    sonrasında döngü oluşturdum ve i değerine 0 atadım ;
    if(b>i){                                             sonrasında i değerini çarpmak istediğim sayı kadar attır dedim ve içeride bir koşul oluşturdum.
        sonuc +=a                                          koşulumda kullanıcıdan alınan b değerim i değerimden büyük olduğu sürece sonuc değişkenime
    }                                                       kullanıcıdan aldığımız diğer a değeri kadar ata dedim.
}
console.log(sonuc)*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

// /* 6- Klavyeden girilen a ve b sayısının bir birine bölümünü, bölme işlemi olmadan toplama ve çıkartma işlemi olarak hesaplayınız.*/
/* let sonuc = 0
 let a = Number(prompt(`Lütfen bölmek istediğiniz sayıyı giriniz.`));     Çözüm : 3 tane değişken atadık başta birisini sayaç gibi kullanacağız,
 let b = Number(prompt(`Sayıyı kaça bölmek isterseniz o sayıyı giriniz.`))      diğerlerinlede kullanıcıdan değer alacağız.
    while(a!==0){                                                               while döngüsü kurdum ve içerisine bir koşul atadım a değeri 0'a eşit 
        a=a-b                                                                   değilse döngü çalışmaya devam etsin dedim. döngünün içerisindede 
        sonuc++                                                                 a değişkenimize a-b değerini atadım her seferinde sayı çıktıkça a değiş
    }                                                                           kenimiz azalacak ve 0 a eşit olunca döngü duracak bu sırada bu işlem
console.log(sonuc) */                                                         //kaç kere gerçekleştiyse sonucumuza atanacak.


/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/*7- Klavyeden girilen bir sayının tekmi çift mi olduğunu bulan bir algoritma yaz.
let x =+prompt(`lütfen bir x değeri giriniz?`)   Çözüm : Kullanıcıdan bir x değeri aldım ve bunun modunu alarak 2 ye bölümünden kalan 0 olanları
if(x%2==0){                                         Çift değer olarak geri kalanını tek değer olarak atadım.
    alert(`Girmiş olduğunuz ${x} değeri çift bir değerdir.`)
}else{alert(`Girmiş olduğunuz ${x} değeri tek bir değerdir.`)}
*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/*8- Klavyeden girilen 20 sayının tek olanlarını ayrı çift olanlarını ayrı toplayıp ekrana yazdırın.
let ciftToplam=0;                                       Çözüm : Öncelikle 2 tane değişken tanımlarız ve 0 değerlerini atarız.
let tekToplam=0;                                        Sonrasında bir döngü yaparız ve bizden 20 kere pozitif bir değer alır.
for(let i =0 ; i < 20 ; i++){                           sonrasında koşul yapısıyla mod olarak değerleri çift ve  tek değerler olarak ayırırız ve 
    let x =Number(prompt(`Pozitif bir sayı giriniz`));  değişkende toplarız. if kısmında kalan 0 olarak verdiğimiz için çift değerler düşecektir
    if(x%2==0){                                         else kısmındada tek değerlerimiz düşeceklerdir ve toplanacaklardır.
        ciftToplam+=x                                   sonrasındada consolumuza yazdırırız.
    }else{tekToplam+=x}
};
console.log(`Girilen çift sayıların toplamı = ${ciftToplam}`);
console.log(`Girilen tek sayıların toplmaı = ${tekToplam}`);*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/
/*9-Klavyeden girilecek olan 2 değerin OBEB'ini bulan algorima*/

// let x = Number(prompt(`Lütfen ilk sıyıyı giriniz`));    Çözüm : ilk olarak kullanıcından 2 tane değer alır ve onları x,y değişkenlerimize atarız.
// let y = Number(prompt(`Lütfen ikinci sıyıyı giriniz`));         sonrasında bir döngü kurarız ve şartımız burda y'nin sıfıra eşit olmamasıdıdır.
// while(y !==0){                                                   y sıfırlandığı zaman döngümüz duracaktır.
//     let kalan = x % y;                                           kalan değişkeni atarız ve x in y'ye bölümünden kalanı buraya atarız.
//     x=y;                                                         x ve y'yi eşitleriz. x sayısı y başlangıçtaki y sayısına eşitlenir.
//     y=kalan                                                      y değişkeniylede kalan değişkenini eşitleriz y değişkeni artık bölümden kalan sayıya
// }                                                                eşitlenir. sonuç 0 olana kadar döngüye girer ve son y değeri bizim OBEBimizdir.
// console.log(`OBEB : ${x}`)

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/*10 - 0 girilinceye kadar klavyeden basılan değerlerin ortalamasını veren algoritma
let sayac = 0;                                        Çözüm = sayaç ve toplam adında bir değişken tanımlarız ve 0 değerini atarız.
let toplam =0;                                        sonrasında kaç sayı girileceği belli olmadığı için sonsuz bir döngü açarız.
while(true){                                          0 girildiği zaman sayı almayı keseceği için döngümüze koşul yapısı koyar ve girilen değerin
    let x = Number(prompt(`lütfen bir sayı giriniz`)); 0'a eşit olduğu durumda döngüyü durduruz.girilen her değerimizde sayaç 1 artar ve girilen değer'e
    if(x==0){                                          eşit olur. toplam kısmınada girilen değeri toplarız. sonuc değişkenimize toplam değer / sayac 
        break;                                         vererek girilen sayıların ortalamasını buluruz.
    }
    sayac++;
    toplam+=x
    var sonuc = toplam/sayac
}
console.log(sonuc)*/

