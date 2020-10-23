function PopulateLanguage(lang) {
    $.get('https://www.weber.edu/wsuimages/GetIntoWeber/campusvideotour/translations.xml', function (xml) {
        var $xml = $(xml);
        var findlang = 'language[name="' + lang + '"]';

        $("#title").text($xml.find(findlang + ' title').text());
        $("#p1").text($xml.find(findlang + ' p1').text());
        $("#p2").text($xml.find(findlang + ' p2').text());
        $("#p3").text($xml.find(findlang + ' p3').text());
        $("#signUp").text($xml.find(findlang + ' signup').text());
        $("#adLang").text($xml.find(findlang + ' additionaltitle').text());

        /*$("#aEnglish").text($xml.find('language[name="english"] linktext').text() + ' (' + $xml.find(findlang +' linklist link[name="english"]').text() + ')');
        $("#aKorean").text($xml.find('language[name="korean"] linktext').text() + ' (' + $xml.find(findlang + ' linklist link[name="korean"]').text() + ')');
        $("#aArabic").text($xml.find('language[name="arabic"] linktext').text() + ' (' + $xml.find(findlang + ' linklist link[name="arabic"]').text() + ')');
        $("#aChinese").text($xml.find('language[name="chinese"] linktext').text() + ' (' + $xml.find(findlang +' linklist link[name="chinese"]').text() + ')');
        $("#aSpanish").text($xml.find('language[name="spanish"] linktext').text() + ' (' + $xml.find(findlang +' linklist link[name="spanish"]').text() + ')');*/
		
		$("#aEnglish").text($xml.find('language[name="english"] linktext').text());
        $("#aKorean").text($xml.find('language[name="korean"] linktext').text());
        $("#aArabic").text($xml.find('language[name="arabic"] linktext').text());
        $("#aChinese").text($xml.find('language[name="chinese"] linktext').text());
        $("#aSpanish").text($xml.find('language[name="spanish"] linktext').text());
		
    })
}