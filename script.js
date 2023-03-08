$(function(){

    //data
    const services = [
        { href: "/1", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_01.png", altText: "반응형웹", tagText: "#반응형웹", backgroundColor: "#f4efec" },
        { href: "/2", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_02.gif", altText: "", tagText: "#캐릭터디자인" },
        { href: "/3", color: "#FFF", imageSrc: "/inc/img/main/ser_slide_03.png", altText: "웹사이트", tagText: "#웹사이트", backgroundColor: "#a87e6e" },
        { href: "/4", color: "", imageSrc: "/inc/img/main/ser_slide_04.gif", altText: "", tagText: ''},
        { href: "/5", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_05.png", altText: "웹시스템 개발", tagText: "#웹시스템 개발", backgroundColor: "#f4efec" },
        { href: "/6",color: "#FFF", imageSrc: "/inc/img/main/ser_slide_06.gif", altText: "", tagText: "#3D 모션 그래픽", backgroundColor: "#ffffff" },
        { href: "/7", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_07.png", altText: "채널/미디어운영", tagText: "#채널/미디어운영", backgroundColor: "#f7ccb7" },
        { href: "/8", color: "#FFF", imageSrc: "/inc/img/main/ser_slide_08.png", altText: "로고디자인", tagText: "#로고디자인 #CI #BI", backgroundColor: "#a87e6e" },
        { href: "/9", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_09.png", altText: "UX_UI", tagText: "#UX/UI", backgroundColor: "#f7ccb7" },
        { href: "/10", color: "",  imageSrc: "/inc/img/main/ser_slide_10.gif", altText: "", tagText: ''},
        { href: "/11", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_11.png", altText: "SNS콘텐츠", tagText: "#SNS콘텐츠", backgroundColor: "#f4efec" },
        { href: "/12", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_12.gif", altText: "", tagText: "#유지보수", backgroundColor: "#f7ccb7" }
      ];
    const services2 = [
        { href: "/1", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_13.png", altText: "CMS개발", tagText: "#CMS개발", backgroundColor: "#f4efec" },
        { href: "/2", color: "#FFF", imageSrc: "/inc/img/main/ser_slide_14.png", altText: "편집디자인", tagText: "#편집디자인", backgroundColor: "#a87e6e"},
        { href: "/3", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_15.gif", altText: "브로슈어", tagText: "#브로슈어 #카탈로그", backgroundColor: "#a87e6e" },
        { href: "/4", color: "#FFF", imageSrc: "/inc/img/main/ser_slide_16.png", altText: "모바일앱", tagText: '#모바일앱', backgroundColor: "#a87e6e"},
        { href: "/5", color: "#FFF", imageSrc: "/inc/img/main/ser_slide_17.gif", altText: "일러스트", tagText: "#일러스트", backgroundColor: "#f4efec" },
        { href: "/6",color: "", imageSrc: "/inc/img/main/ser_slide_18.gif", altText: "", tagText: "", backgroundColor: "" },
        { href: "/7", color: "#FFF", imageSrc: "/inc/img/main/ser_slide_19.gif", altText: "브랜딩", tagText: "#브랜딩", backgroundColor: "#f7ccb7" },
        { href: "/8", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_20.png", altText: "이커머스", tagText: "#이커머스", backgroundColor: "#f4efec" },
        { href: "/9", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_21.gif", altText: "모션그래픽", tagText: "#모션그래픽", backgroundColor: "#f7ccb7" },
        { href: "/10", color: "#a87e6e",  imageSrc: "/inc/img/main/ser_slide_22.png", altText: "보안", tagText: '#보안 #SSL'},
        { href: "/11", color: "#FFF", imageSrc: "/inc/img/main/ser_slide_23.gif", altText: "Ebook", tagText: "#Ebook", backgroundColor: "#a87e6e" },
        { href: "/12", color: "#a87e6e", imageSrc: "/inc/img/main/ser_slide_24.png", altText: "SEO", tagText: "#SEO", backgroundColor: "#f4efec" }
      ];

      

    // generate HTML for services
    let servicesHtml = '';
    services.forEach(service => {
    servicesHtml += `
        <a href="${service.href}" class="service_box" style="background-color:${service.backgroundColor};">
        <img src="${service.imageSrc}" alt="${service.altText}">
        <p class="service_tag ${service.backgroundColor === '#ffffff' ? 'wh' : 'bw'}"
        style="color:${service.color}">${service.tagText}</p>
        </a>
    `;
    });

    let servicesHtml2 = '';
    services2.forEach(service2 => {
    servicesHtml2 += `
        <a href="${service2.href}" class="service_box" style="background-color:${service2.backgroundColor};">
        <img src="${service2.imageSrc}" alt="${service2.altText}">
        <p class="service_tag ${service2.backgroundColor === '#ffffff' ? 'wh' : 'bw'}"
        style="color:${service2.color}">${service2.tagText}</p>
        </a>
    `;
    });

    // add generated HTML to the DOM
    for (var i=0; i<2; i++){
    $('#component1').append(`
    <div class="service_box_wrap">
        ${servicesHtml}
    </div>
    `);
    $('#component2').append(`
    <div class="service_box_wrap2">
        ${servicesHtml2}
    </div>
    `);
    }
});