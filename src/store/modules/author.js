import * as types from '../mutation-types'

const authors = {
  fir:{
    title:'@IT·互联网',
    img:'../../static/img/hot2.jpg',
    info:{recordCount:47107,followCount:1460560},
    more:{
      description:[
        '欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。',
        'Hi，很高兴在@IT·互联网专题遇见你。<br>收录范围：收录IT&amp;互联网行业观察与思考，数码产品极客体验分析等类型文章<br>首页推荐：<a href="http://www.jianshu.com/p/4edc76104c27" class="blue-link">http://www.jianshu.com/p/4edc76104c27</a><br>专题主编：@喵不鱼 <a href="http://www.jianshu.com/u/e1efbb49f1e7" class="blue-link">http://www.jianshu.com/u/e1efbb49f1e7</a>'
      ],
      editors:[
        {img:'../../static/img/editor1.png',name:'简书'},
        {img:'../../static/img/editor2.jpg',name:'向右奔跑'},
        {img:'../../static/img/editor3.jpg',name:'圆十二'},
        {img:'../../static/img/editor4.png',name:'South_Lin'},
        {img:'../../static/img/editor5.jpeg',name:'若婧'},
        {img:'../../static/img/editor6.jpg',name:'谁占了我的一年的称号'},
        {img:'../../static/img/editor7.jpg',name:'盘数'},
        {img:'../../static/img/editor8.jpg',name:'喵不鱼'},
        {img:'../../static/img/editor9.jpg',name:'易安公子'},
        {img:'../../static/img/editor10.png',name:'七小葩'},
        {img:'../../static/img/editor11.jpg',name:'金桔与青柠'}
      ]
    },
    articleLists:{
      newestCommands:[{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      }],
      newestRecords:[{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      }],
      hots:[{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      }]
    }
  },
  sec:{
    title:'人文社科',
    img:'../../static/img/hot1.jpg',
    info:{recordCount:'3234',followCount:'2133443'},
    more:{
      description:[
        '故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的虚构故事，这里记录你的每个故事。',
        '欢迎向我们投稿你的故事！',
        '所投稿件必须是一个完整的故事，故事包括但不限于：小说、世间故事、叙事散文、以叙事为主的回忆录……',
        '投稿前，请阅读简书史上最有趣的投稿指南：<br><a href="http://www.jianshu.com/p/9da8500a57f0" class="blue-link">http://www.jianshu.com/p/9da8500a57f0</a>',
        '<p>投稿须知：<br>1.建议题材：有情节的小说、身边的故事、叙事游记、以叙事为主的回忆录、职业故事等。<br>2.不建议题材：连载、只有大道理的鸡汤、成功学、工具文、诗歌、观点时评类文章等。</br>3.文章在一千字以上，排版合理，不影响阅读体验。<br>4.禁止外链宣传。不得有个人微信、微信公众号、微博、豆瓣链接。</p>'
      ],
      editors:[
        {img:'../../static/img/editor1.png',name:'简书'},
        {img:'../../static/img/editor2.jpg',name:'向右奔跑'},
        {img:'../../static/img/editor3.jpg',name:'圆十二'},
        {img:'../../static/img/editor4.png',name:'South_Lin'},
        {img:'../../static/img/editor5.jpeg',name:'若婧'},
        {img:'../../static/img/editor6.jpg',name:'谁占了我的一年的称号'},
        {img:'../../static/img/editor7.jpg',name:'盘数'},
        {img:'../../static/img/editor8.jpg',name:'喵不鱼'},
        {img:'../../static/img/editor9.jpg',name:'易安公子'},
        {img:'../../static/img/editor10.png',name:'七小葩'},
        {img:'../../static/img/editor11.jpg',name:'金桔与青柠'}
      ]
    },
    articleLists:{
      newestCommands:[{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      }],
      newestRecords:[{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      }],
      hots:[{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      }]
    }
  },
  thir:{
    title:'读书',
    img:'../../static/img/hot3.jpg',
    info:{recordCount:3234,followCount:2133443},
    more:{
      description:[
        '<br>投稿须知:<br>    读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。<br>    文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。<br>      文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。<br>投稿请查看投稿须知：<a href="https://www.jianshu.com/p/2a4cc9232f37" class="blue-link">https://www.jianshu.com/p/2a4cc9232f37</a> <br>进群请添加主编微信: MYH5619175, 记得备注I简书昵称+读书]。',
        '欢迎关注公众号茶点故事（Jianshu_teahouse）每周一篇编委精心推荐精彩书评。'
      ],
      editors:[
        {img:'../../static/img/editor1.png',name:'简书'},
        {img:'../../static/img/editor2.jpg',name:'向右奔跑'},
        {img:'../../static/img/editor3.jpg',name:'圆十二'},
        {img:'../../static/img/editor4.png',name:'South_Lin'},
        {img:'../../static/img/editor5.jpeg',name:'若婧'},
        {img:'../../static/img/editor6.jpg',name:'谁占了我的一年的称号'},
        {img:'../../static/img/editor7.jpg',name:'盘数'},
        {img:'../../static/img/editor8.jpg',name:'喵不鱼'},
        {img:'../../static/img/editor9.jpg',name:'易安公子'},
        {img:'../../static/img/editor10.png',name:'七小葩'},
        {img:'../../static/img/editor11.jpg',name:'金桔与青柠'}
      ]
    },
    articleLists:{
      newestCommands:[{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      }],
      newestRecords:[{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      }],
      hots:[{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      }]
    }
  },
  fourth:{
    title:'手绘',
    img:'../../static/img/hot4.jpg',
    info:{recordCount:3234,followCount:2133443},
    more:{
      description:[
        '故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的虚构故事，这里记录你的每个故事。',
        '欢迎向我们投稿你的故事！',
        '所投稿件必须是一个完整的故事，故事包括但不限于：小说、世间故事、叙事散文、以叙事为主的回忆录……',
        '投稿前，请阅读简书史上最有趣的投稿指南：<br><a href="http://www.jianshu.com/p/9da8500a57f0" class="blue-link">http://www.jianshu.com/p/9da8500a57f0</a>',
        '<p>投稿须知：<br>1.建议题材：有情节的小说、身边的故事、叙事游记、以叙事为主的回忆录、职业故事等。<br>2.不建议题材：连载、只有大道理的鸡汤、成功学、工具文、诗歌、观点时评类文章等。</br>3.文章在一千字以上，排版合理，不影响阅读体验。<br>4.禁止外链宣传。不得有个人微信、微信公众号、微博、豆瓣链接。</p>'
      ],
      editors:[
        {img:'../../static/img/editor1.png',name:'简书'},
        {img:'../../static/img/editor2.jpg',name:'向右奔跑'},
        {img:'../../static/img/editor3.jpg',name:'圆十二'},
        {img:'../../static/img/editor4.png',name:'South_Lin'},
        {img:'../../static/img/editor5.jpeg',name:'若婧'},
        {img:'../../static/img/editor6.jpg',name:'谁占了我的一年的称号'},
        {img:'../../static/img/editor7.jpg',name:'盘数'},
        {img:'../../static/img/editor8.jpg',name:'喵不鱼'},
        {img:'../../static/img/editor9.jpg',name:'易安公子'},
        {img:'../../static/img/editor10.png',name:'七小葩'},
        {img:'../../static/img/editor11.jpg',name:'金桔与青柠'}
      ]
    },
    articleLists:{
      newestCommands:[{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      }],
      newestRecords:[{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      }],
      hots:[{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      }]
    }
  },
  fifth:{
    title:'旅行·在路上',
    img:'../../static/img/hot5.png',
    info:{recordCount:3234,followCount:2133443},
    more:{
      description:[
        '欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。',
        'Hi，很高兴在@IT·互联网专题遇见你。<br>收录范围：收录IT&amp;互联网行业观察与思考，数码产品极客体验分析等类型文章<br>首页推荐：<a href="http://www.jianshu.com/p/4edc76104c27" class="blue-link">http://www.jianshu.com/p/4edc76104c27</a><br>专题主编：@喵不鱼 <a href="http://www.jianshu.com/u/e1efbb49f1e7" class="blue-link">http://www.jianshu.com/u/e1efbb49f1e7</a>'
      ],
      editors:[
        {img:'../../static/img/editor1.png',name:'简书'},
        {img:'../../static/img/editor2.jpg',name:'向右奔跑'},
        {img:'../../static/img/editor3.jpg',name:'圆十二'},
        {img:'../../static/img/editor4.png',name:'South_Lin'},
        {img:'../../static/img/editor5.jpeg',name:'若婧'},
        {img:'../../static/img/editor6.jpg',name:'谁占了我的一年的称号'},
        {img:'../../static/img/editor7.jpg',name:'盘数'},
        {img:'../../static/img/editor8.jpg',name:'喵不鱼'},
        {img:'../../static/img/editor9.jpg',name:'易安公子'},
        {img:'../../static/img/editor10.png',name:'七小葩'},
        {img:'../../static/img/editor11.jpg',name:'金桔与青柠'}
      ]
    },
    articleLists:{
      newestCommands:[{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      }],
      newestRecords:[{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      }],
      hots:[{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      }]
    }
  },
  sixth:{
    title:'故事',
    img:'../../static/img/hot6.jpg',
    info:{recordCount:3234,followCount:2133443},
    more:{
      description:[
        '故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的虚构故事，这里记录你的每个故事。',
        '欢迎向我们投稿你的故事！',
        '所投稿件必须是一个完整的故事，故事包括但不限于：小说、世间故事、叙事散文、以叙事为主的回忆录……',
        '投稿前，请阅读简书史上最有趣的投稿指南：<br><a href="http://www.jianshu.com/p/9da8500a57f0" class="blue-link">http://www.jianshu.com/p/9da8500a57f0</a>',
        '<p>投稿须知：<br>1.建议题材：有情节的小说、身边的故事、叙事游记、以叙事为主的回忆录、职业故事等。<br>2.不建议题材：连载、只有大道理的鸡汤、成功学、工具文、诗歌、观点时评类文章等。</br>3.文章在一千字以上，排版合理，不影响阅读体验。<br>4.禁止外链宣传。不得有个人微信、微信公众号、微博、豆瓣链接。</p>'
      ],
      editors:[
        {img:'../../static/img/editor1.png',name:'简书'},
        {img:'../../static/img/editor2.jpg',name:'向右奔跑'},
        {img:'../../static/img/editor3.jpg',name:'圆十二'},
        {img:'../../static/img/editor4.png',name:'South_Lin'},
        {img:'../../static/img/editor5.jpeg',name:'若婧'},
        {img:'../../static/img/editor6.jpg',name:'谁占了我的一年的称号'},
        {img:'../../static/img/editor7.jpg',name:'盘数'},
        {img:'../../static/img/editor8.jpg',name:'喵不鱼'},
        {img:'../../static/img/editor9.jpg',name:'易安公子'},
        {img:'../../static/img/editor10.png',name:'七小葩'},
        {img:'../../static/img/editor11.jpg',name:'金桔与青柠'}
      ]
    },
    articleLists:{
      newestCommands:[{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      }],
      newestRecords:[{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      }],
      hots:[{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      }]
    }
  },
  seventh:{
    title:'历史',
    img:'../../static/img/hot7.jpg',
    info:{recordCount:3234,followCount:2133443},
    more:{
      description:[
        '欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。',
        'Hi，很高兴在@IT·互联网专题遇见你。<br>收录范围：收录IT&amp;互联网行业观察与思考，数码产品极客体验分析等类型文章<br>首页推荐：<a href="http://www.jianshu.com/p/4edc76104c27" class="blue-link">http://www.jianshu.com/p/4edc76104c27</a><br>专题主编：@喵不鱼 <a href="http://www.jianshu.com/u/e1efbb49f1e7" class="blue-link">http://www.jianshu.com/u/e1efbb49f1e7</a>'
      ],
      editors:[
        {img:'../../static/img/editor1.png',name:'简书'},
        {img:'../../static/img/editor2.jpg',name:'向右奔跑'},
        {img:'../../static/img/editor3.jpg',name:'圆十二'},
        {img:'../../static/img/editor4.png',name:'South_Lin'},
        {img:'../../static/img/editor5.jpeg',name:'若婧'},
        {img:'../../static/img/editor6.jpg',name:'谁占了我的一年的称号'},
        {img:'../../static/img/editor7.jpg',name:'盘数'},
        {img:'../../static/img/editor8.jpg',name:'喵不鱼'},
        {img:'../../static/img/editor9.jpg',name:'易安公子'},
        {img:'../../static/img/editor10.png',name:'七小葩'},
        {img:'../../static/img/editor11.jpg',name:'金桔与青柠'}
      ]
    },
    articleLists:{
      newestCommands:[{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      }],
      newestRecords:[{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      }],
      hots:[{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      }]
    }
  }
};

const state = {
  authorInformation:[{
    title:'@IT·互联网',
    img:'../../static/img/hot2.jpg',
    info:{recordCount:0,followCount:0},
    more:{
      description:[
        '欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。',
        'Hi，很高兴在@IT·互联网专题遇见你。<br>收录范围：收录IT&amp;互联网行业观察与思考，数码产品极客体验分析等类型文章<br>首页推荐：<a href="http://www.jianshu.com/p/4edc76104c27" class="blue-link">http://www.jianshu.com/p/4edc76104c27</a><br>专题主编：@喵不鱼 <a href="http://www.jianshu.com/u/e1efbb49f1e7" class="blue-link">http://www.jianshu.com/u/e1efbb49f1e7</a>'
      ],
      editors:[
        {img:'../../static/img/editor1.png',name:'简书'},
        {img:'../../static/img/editor2.jpg',name:'向右奔跑'},
        {img:'../../static/img/editor3.jpg',name:'圆十二'},
        {img:'../../static/img/editor4.png',name:'South_Lin'},
        {img:'../../static/img/editor5.jpeg',name:'若婧'},
        {img:'../../static/img/editor6.jpg',name:'谁占了我的一年的称号'},
        {img:'../../static/img/editor7.jpg',name:'盘数'},
        {img:'../../static/img/editor8.jpg',name:'喵不鱼'},
        {img:'../../static/img/editor9.jpg',name:'易安公子'},
        {img:'../../static/img/editor10.png',name:'七小葩'},
        {img:'../../static/img/editor11.jpg',name:'金桔与青柠'}
      ]
    },
    articleLists:{
      newestCommands:[{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      },{
        title:'当CPU飙高时，它在做什么',
        content:'在开发过程中，有时候我们发现JVM占用的CPU居高不下，跟我们的预期不符，这时，CPU在做什么呢？是什么线程让CPU如此忙碌呢？我们通过如下几步，可以查看CPU在执行什么线程。',
        author:'刘振锋',
        command:4,
        like:43,
        admire:1,
        img:'../../static/img/author-newestCommand1.png'
      }],
      newestRecords:[{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      },{
        title:'Redisson是如何实现分布式锁的？',
        content:'针对项目中使用的分布式锁进行简单的示例配置以及源码解析，并列举源码中使用到的一些基础知识点，但是没有对redisson中使用到的netty知识进行解析。',
        author:'Java填坑之路',
        command:0,
        like:0,
        admire:0,
        img:'../../static/img/author-newestRecord1.png'
      }],
      hots:[{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      },{
        title:'这15个图片网站，至少让你的效率翻一倍！',
        content:'如果你还在用百度搜图，那真是“棒棒哒”，像你这么专一的人不多了。经常有人会问我，你一般在哪找的图片？不少朋友都会有自己的素材库，需要时提取就可以了。不过像我这么懒的人，图片分类都得好久，找图片就更费力了。',
        author:'七小葩',
        command:608,
        like:15652,
        admire:15,
        img:'../../static/img/author-hots1.jpg'
      }]
    }
  }]
};

const mutations = {
  [types.CONFIRM_AUTHOR](state,theme){
    switch (theme) {
      case '人文社科':
        state.authorInformation = [authors.sec];break;
      case '@IT·互联网':
        state.authorInformation = [authors.fir];break;
      case '读书':
        state.authorInformation = [authors.thir];break;
      case '手绘':
        state.authorInformation = [authors.fourth];break;
      case '旅行·在路上':
        state.authorInformation = [authors.fifth];break;
      case '故事':
        state.authorInformation = [authors.sixth];break;
      case '历史':
        state.authorInformation = [authors.seventh];break;
      default:
        state.authorInformation = [authors.fir];break;
    }
  }
};

export default{
  state,
  mutations
}
