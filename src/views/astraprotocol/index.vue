<template>
    <div class="page">
        <div class="header">
            <div class="left">
                <van-image :src="logo" width="111" height="32" fit="contain" alt=""/>
            </div>
            <div class="middle">
                <div>Home</div>
                <div>Features</div>
                <div>Solutions</div>
                <div>Portners</div>
                <div>Blog</div>
            </div>
            <div class="right">
                <div class="right-icon">
                    <van-image style="position: relative;top:5px;" :src="logoSmall" width="22" height="20" fit="contain" alt=""/>
                    <div class="num">0.0021</div>
                </div>
                <div class="menu">
                    <svg t="1752382059814" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13038" width="37" height="37"><path d="M896 232.727273h-744.727273a34.909091 34.909091 0 0 1 0-69.818182h744.727273a34.909091 34.909091 0 0 1 0 69.818182zM896 884.363636h-744.727273a34.909091 34.909091 0 0 1 0-69.818181h744.727273a34.909091 34.909091 0 0 1 0 69.818181zM709.818182 558.545455h-558.545455a34.909091 34.909091 0 0 1 0-69.818182h558.545455a34.909091 34.909091 0 0 1 0 69.818182z" fill="#000000" p-id="13039"></path></svg>                </div>
                <div class="req">
                    <div class="reg-text">Request Demo</div>
                </div>
            </div>
        </div>
        <div class="mp4">
            <video src="../../assets/video/v2/bg.mov" autoplay="" loop="" muted="" playsinline="" class="absolute inset-0 w-full h-full object-cover object-bottom"></video>
            <div class="p-1 text-l">
                <div class="p-1-l"><span class="text">Your</span> Identity, Your Control.</div>
                <div class="p-1-s">Real-time enterprise compliance with smart identity verification solutions.</div>
                <div class="p-1-btn">
                    <div class="p-btn btn1">
                        <div style="margin-right: 10px;">
                            <svg class="fill-white" width="17" height="17" viewBox="0 0 18 20"  fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z"></path></svg>                        
                        </div>
                        <div style="margin-right: 10px;">
                            <svg width="17" height="17" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 14.6726C16.5359 15.7135 16.3123 16.1783 15.7145 17.0987C14.8807 18.3828 13.703 19.9828 12.2455 19.9965C10.951 20.0078 10.6184 19.1442 8.85974 19.1544C7.10224 19.1635 6.73591 20.0124 5.44025 19.9999C3.98278 19.9862 2.86692 18.5419 2.032 17.2567C-0.301978 13.6658 -0.545827 9.44994 0.893664 7.20791C1.91625 5.61587 3.53104 4.68406 5.04807 4.68406C6.59319 4.68406 7.56521 5.54087 8.84176 5.54087C10.0812 5.54087 10.8364 4.68179 12.6231 4.68179C13.9716 4.68179 15.4032 5.4261 16.4224 6.71018C13.0827 8.56131 13.6243 13.384 17 14.6726ZM11.2679 3.24771C11.9163 2.40453 12.4096 1.2159 12.2309 0C11.1701 0.0738631 9.93065 0.755677 9.20585 1.64544C8.5496 2.45226 8.00684 3.64884 8.21697 4.81247C9.37441 4.84769 10.5723 4.14884 11.2679 3.24771Z" fill="white"></path></svg>
                        </div>
                        <div>Coming soon</div>
                    </div>
                    <div class="p-btn btn2">
                        <div class="btn-box">
                            <div style="margin-right: 10px;">
                            <van-image style="position: relative;top:5px;" :src="logoSmall" width="22" height="20" fit="contain" alt=""/>
                            </div>
                            <div>Astra Pro Business</div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        <div class="built">
            <div class="b-left">
                <p class="text text-60">Built for</p>
                <p class="text text-60">Individuals and</p>
                <p class="text text-60">Enterprises</p>
                <p class="text text-18">Astra bridges users and platforms with secure, smart compliance.</p>
                <div class="content">
                    <div class="b-right show-phone">
                        <van-image class="bigImg" :src="phone" width="521" height="700" fit="contain" alt=""/>
                        <van-image class="smallImg" :src="phone" height="400" fit="contain" alt=""/>
                    </div>
                    <div class="c-l">
                        <div class="c-box">
                            <div class="text-20">For Individuals</div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 8V5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6M4 6C4 6.53043 4.21071 7.03914 4.58579 7.41421C4.96086 7.78929 5.46957 8 6 8H18C18.2652 8 18.5196 8.10536 18.7071 8.29289C18.8946 8.48043 19 8.73478 19 9V12M4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.2652 20 18.5196 19.8946 18.7071 19.7071C18.8946 19.5196 19 19.2652 19 19V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 12V16H16C15.4696 16 14.9609 15.7893 14.5858 15.4142C14.2107 15.0391 14 14.5304 14 14C14 13.4696 14.2107 12.9609 14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12H20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                   
                                </div>
                                <div>Private identity vault</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.333 13.4048C12.5719 13.9699 11.499 14.6548 9.99978 14.6548C8.50052 14.6548 7.42768 13.9699 6.66652 13.4048" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.9298 11.7087C19.4973 11.7087 19.9539 12.1821 19.9125 12.7481C19.5368 17.8853 17.8142 19.609 12.6775 19.985C12.1109 20.0265 11.637 19.5695 11.637 19.0013C11.637 18.4636 12.0618 18.0248 12.5981 17.9845C13.3685 17.9266 14.0238 17.8381 14.5843 17.7135C15.6743 17.4713 16.28 17.1251 16.6663 16.7389C17.0526 16.3526 17.3986 15.7471 17.6409 14.6569C17.7656 14.096 17.8552 13.44 17.9136 12.6687C17.9542 12.133 18.3925 11.7087 18.9298 11.7087ZM0.998131 11.7087C1.53562 11.7087 1.97421 12.1333 2.01462 12.6692C2.07274 13.4403 2.16183 14.0962 2.28645 14.6569C2.52879 15.7472 2.87475 16.3526 3.26106 16.7389C3.64737 17.1252 4.25281 17.4712 5.34309 17.7135C5.9038 17.8381 6.55971 17.9267 7.33076 17.9846C7.86674 18.0248 8.29133 18.4634 8.29133 19.0009C8.29133 19.5687 7.81768 20.0255 7.25136 19.9841C2.11458 19.6082 0.390948 17.8853 0.014925 12.7486C-0.0265309 12.1823 0.4303 11.7087 0.998131 11.7087ZM8.29133 1.07021C8.29133 1.60744 7.86694 2.04582 7.33124 2.08639C6.55998 2.1448 5.90393 2.2344 5.34309 2.35904C4.25293 2.60138 3.64735 2.94736 3.26106 3.33365C2.8749 3.72002 2.52869 4.32567 2.28645 5.41568C2.1619 5.97629 2.0728 6.63176 2.01465 7.40239C1.97422 7.93835 1.53562 8.36295 0.998133 8.36295C0.4303 8.36295 -0.0265342 7.8893 0.0149128 7.32298C0.390883 2.18584 2.11439 0.463232 7.25186 0.0874576C7.8179 0.0460552 8.29133 0.502661 8.29133 1.07021ZM11.637 1.07021C11.637 0.502658 12.1105 0.0460506 12.6765 0.0874483C17.814 0.463183 19.5375 2.18583 19.9135 7.32298C19.9549 7.8893 19.4981 8.36295 18.9302 8.36295C18.3927 8.36295 17.9542 7.93834 17.9135 7.40239C17.8551 6.63175 17.7655 5.97632 17.6409 5.41568C17.3986 4.32521 17.0527 3.72 16.6663 3.33365C16.28 2.94731 15.6747 2.60138 14.5843 2.35904C14.0235 2.23445 13.368 2.14484 12.5971 2.08642C12.0614 2.04582 11.637 1.60744 11.637 1.07021Z" fill="white"></path><path d="M9.99979 9.09485V11.5948" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.4997 6.59485V7.42816" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.49983 6.59485V7.42816" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    
                                </div>
                                <div>Self-sovereign KYC control</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 11C3.19722 11 3.39004 11.0584 3.5542 11.1677C3.71835 11.277 3.84652 11.4324 3.92257 11.6144C3.99863 11.7963 4.01917 11.9967 3.98163 12.1904C3.94409 12.384 3.85013 12.5622 3.71157 12.7025C3.57302 12.8429 3.39605 12.9391 3.20294 12.9792C3.00982 13.0192 2.80918 13.0013 2.62624 12.9276C2.4433 12.8539 2.28624 12.7277 2.17481 12.565C2.06338 12.4023 2.00256 12.2102 2 12.013C2 11.7478 2.10536 11.4934 2.29289 11.3059C2.48043 11.1184 2.73478 11.013 3 11.013V11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 11C21.1972 11 21.39 11.0584 21.5542 11.1677C21.7184 11.277 21.8465 11.4324 21.9226 11.6144C21.9986 11.7963 22.0192 11.9967 21.9816 12.1904C21.9441 12.384 21.8501 12.5622 21.7116 12.7025C21.573 12.8429 21.3961 12.9391 21.2029 12.9792C21.0098 13.0192 20.8092 13.0013 20.6262 12.9276C20.4433 12.8539 20.2862 12.7277 20.1748 12.565C20.0634 12.4023 20.0026 12.2102 20 12.013C20 11.7478 20.1054 11.4934 20.2929 11.3059C20.4804 11.1184 20.7348 11.013 21 11.013V11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 12H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 9L16 12L13 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>                                    
                                </div>
                                <div>Frictionless onboarding</div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="c-r">
                        <div class="c-box">   
                            <div class="text-20">For Businesses</div>
                            <div class="c-i-t">
                                <div class="img-box">
                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.456 10.45C18.2481 9.12484 17.6322 7.89752 16.6941 6.93882C15.7559 5.98012 14.5423 5.33773 13.222 5.10107C11.9017 4.86441 10.5405 5.04525 9.32779 5.61842C8.11509 6.19159 7.11125 7.12857 6.45599 8.29896C5.82033 8.35154 5.20125 8.52882 4.63409 8.82067C4.06694 9.11252 3.56283 9.51322 3.15054 9.99989C2.73824 10.4866 2.42584 11.0497 2.23118 11.6571C2.03651 12.2645 1.96339 12.9043 2.01599 13.54C2.06798 14.1756 2.24465 14.7947 2.53592 15.362C2.82719 15.9294 3.22735 16.4338 3.71357 16.8464C4.19978 17.2591 4.76251 17.5719 5.36964 17.7671C5.97677 17.9623 6.61639 18.036 7.25199 17.984H18.003C18.4974 18.0136 18.9929 17.9455 19.461 17.7837C19.9292 17.6218 20.3608 17.3693 20.7313 17.0405C21.1019 16.7118 21.404 16.3133 21.6205 15.8678C21.837 15.4222 21.9635 14.9384 21.993 14.444C22.0532 13.4454 21.7142 12.4639 21.0507 11.7153C20.3872 10.9666 19.4535 10.5122 18.455 10.452L18.456 10.45Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div>API integration</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                   <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0.999999C5.95103 0.999999 3.86769 1.45115 2.70508 2.53613C1.63467 3.53515 1.11374 5.29612 1.0166 8.70898L1.00293 9.41406C1.00117 9.56892 1.00061 9.66728 1.00195 9.74121L1.01367 9.92187C1.02047 9.98065 1.02736 10.0256 1.04004 10.0859L1.10059 10.3437C2.36424 15.4747 6.45109 17.7043 8.74023 18.5693L9.17285 18.7246C9.57724 18.8621 9.67037 18.8936 10 18.8936C10.2474 18.8936 10.3617 18.8765 10.5742 18.8096L10.8271 18.7246C12.9239 18.0117 17.2689 15.9507 18.7637 10.8467L18.8994 10.3437C18.9292 10.2228 18.9472 10.1464 18.96 10.0859L18.9863 9.92187C18.9929 9.86462 18.9967 9.815 18.998 9.74121L18.9971 9.41406C18.953 5.5344 18.4367 3.60177 17.2949 2.53613C16.1323 1.45115 14.049 0.999999 10 0.999999Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.702 6.72448C13.0948 6.40393 13.6747 6.42665 14.0409 6.79283C14.4067 7.15886 14.4293 7.73803 14.1093 8.13073L14.0409 8.2069L9.8739 12.3739L9.80261 12.4383C9.75075 12.4812 9.69513 12.5169 9.63757 12.5477C9.62313 12.5554 9.60836 12.5622 9.59363 12.5692C9.58121 12.5751 9.56912 12.5814 9.55652 12.5868C9.54367 12.5922 9.53048 12.5966 9.51746 12.6014C9.49791 12.6087 9.47875 12.6169 9.45886 12.6229C9.45175 12.6251 9.44453 12.6268 9.43738 12.6288C9.41313 12.6356 9.38874 12.6414 9.36414 12.6464C9.35668 12.6478 9.34916 12.6489 9.34168 12.6503C9.32091 12.6539 9.3001 12.6567 9.27918 12.659C9.26812 12.6603 9.25706 12.6611 9.24597 12.662C9.2261 12.6635 9.20632 12.6655 9.1864 12.6659C9.17337 12.6661 9.16037 12.6661 9.14734 12.6659C9.12875 12.6655 9.11023 12.6643 9.09168 12.663C9.08027 12.6621 9.06888 12.6613 9.0575 12.66C9.03722 12.6578 9.01709 12.6547 8.99695 12.6512C8.98587 12.6493 8.97477 12.6476 8.96375 12.6454C8.94736 12.642 8.93116 12.6379 8.91492 12.6337C8.89787 12.6292 8.88098 12.6243 8.86414 12.619C8.84903 12.6142 8.83413 12.6089 8.81922 12.6034C8.80822 12.5993 8.79689 12.5961 8.78601 12.5917C8.69721 12.5552 8.61239 12.5054 8.53504 12.4422L8.45984 12.3739L6.79285 10.7069L6.72449 10.6307C6.40426 10.238 6.42679 9.65891 6.79285 9.29283C7.15892 8.92676 7.73797 8.90425 8.13074 9.22448L8.20691 9.29283L9.16687 10.2528L12.6268 6.79283L12.702 6.72448Z" fill="white"></path></svg>  
                                </div>
                                <div>Compliance automation</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 10.22 20.4722 8.47991 19.4832 6.99987C18.4943 5.51983 17.0887 4.36628 15.4442 3.68509C13.7996 3.0039 11.99 2.82567 10.2442 3.17294C8.49836 3.5202 6.89472 4.37737 5.63604 5.63604C4.37737 6.89472 3.5202 8.49836 3.17294 10.2442C2.82567 11.99 3.0039 13.7996 3.68509 15.4442C4.36628 17.0887 5.51983 18.4943 6.99987 19.4832C8.47991 20.4722 10.22 21 12 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.60001 9H20.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.60001 15H12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.578 3C9.89332 5.69961 9.00018 8.81787 9.00018 12C9.00018 15.1821 9.89332 18.3004 11.578 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5 3C14.219 5.755 15 8.876 15 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 21V14M18 14L21 17M18 14L15 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                                </div>
                                <div >Multi-jurisdiction support</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="b-right">
                <van-image :src="phone" width="521" height="700" fit="contain" alt=""/>

            </div>
        </div>
        <div class="work">
            <div class="title">How It works</div>
            <div class="w-box">
                <div class="w-item" v-for="(item,index) in work" :key="item.index">
                    <div class="box">
                        <van-image  class="img":src="item.icon" width="48" height="48" fit="contain" alt=""/>
                        <div class="name">{{ item.name }}</div>
                    </div>
                    
                    <div class="index">{{ item.index }}</div>
                    <div  class="point"></div>
                </div>
            </div>
        </div>
        <div class="product">
            <div class="pr-left">
                <div class="text-60">Product Features</div>
                <div class="btn-box">
                    <div class="btn">
                    <div>KYC & AML Verification</div>
                    <div>Sharing Console</div>
                    </div>
                    <div class="btn">
                        <div>Identity Hub</div>
                        <div>Compliance Dashboard</div>
                    </div>
                    <div class="btn">
                        <div>Regulatory Updates</div>
                        <div>Manage Permissions</div>
                    </div>
                </div>
                
                <div class="show-p">
                    <van-image  class="img bigImg" :src="mobiel" width="483" height="560" fit="contain" alt=""/>
                    <van-image  class="img smallImg" :src="mobiel" width="375" height="560" fit="contain" alt=""/>
                </div>
                <div class="text-40">Control Who Sees What and When</div>
                <div class="text-18">Time-limited access, API management, platform-level control.</div>
                <ul>
                    <li>Revoke platform access</li>
                    <li>Set time-based data sharing</li>
                    <li>API key permissions</li>
                </ul>
            </div>
            <div class="pr-right">
                <van-image  class="img" :src="mobiel" width="483" height="560" fit="contain" alt=""/>
            </div>
        </div>
        <div class="platform">
            <div class="title">Platform Integrations</div>
            <div class="container">
                <div class="red-bg"></div>
                <div class="big-circle">
                    <!-- 小圆 -->
                    <div
                    v-for="(item, index) in circleItems"
                    :key="item.index"
                    :class="`small-circle small-circle-${item.index}`"
                    :style="{
                        '--translateX': `${radius}px`,
                        '--initialRotate': `${index * (750 / circleItems.length)}deg`,
                        '--animationDelay': `-${index * (150 / circleItems.length)}s`
                    }"
                    >

                    <div class="small-circle-text">
                        <van-image round :src="item.icon" width="100" height="100" fit="contain" alt=""/>
                    </div>
                </div>
                <div class="t-box">
                    <div class="title">Connect Once. Comply Everywhere</div>
                    <div class="t-16">Effortless integration with Web2 and Web3 platforms.</div>
                    <div class="t-btn">
                      <div class="btn-box">
                        <div><svg width="17" height="17" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 14.6726C16.5359 15.7135 16.3123 16.1783 15.7145 17.0987C14.8807 18.3828 13.703 19.9828 12.2455 19.9965C10.951 20.0078 10.6184 19.1442 8.85974 19.1544C7.10224 19.1635 6.73591 20.0124 5.44025 19.9999C3.98278 19.9862 2.86692 18.5419 2.032 17.2567C-0.301978 13.6658 -0.545827 9.44994 0.893664 7.20791C1.91625 5.61587 3.53104 4.68406 5.04807 4.68406C6.59319 4.68406 7.56521 5.54087 8.84176 5.54087C10.0812 5.54087 10.8364 4.68179 12.6231 4.68179C13.9716 4.68179 15.4032 5.4261 16.4224 6.71018C13.0827 8.56131 13.6243 13.384 17 14.6726ZM11.2679 3.24771C11.9163 2.40453 12.4096 1.2159 12.2309 0C11.1701 0.0738631 9.93065 0.755677 9.20585 1.64544C8.5496 2.45226 8.00684 3.64884 8.21697 4.81247C9.37441 4.84769 10.5723 4.14884 11.2679 3.24771Z" fill="white"></path></svg></div>
                        <div class="btn">Coming Soon</div>
                      </div>  
                      <div class="btn-box">
                        <div><svg class="fill-white" width="17" height="17" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z" fill="white"></path></svg></div>
                        <div class="btn">Coming Soon</div>
                      </div>  
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="built technology">
            <div class="b-left">
                <p class="text text-60">Technology Solutions</p>
                <p class="text text-18">We build advanced digital infrastructure for modern enterprises</p>
                <div class="content">
                    <div class="c-l">
                        <div class="c-box">
                            <div class="text-20">Web 2.0 Solutions</div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div>Payment Systems & Integration</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>                                    
                                </div>
                                <div>Financial Technology Architecture</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div>Transaction Processing Platforms</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div>Secure Authentication Systems</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div>Enterprise API Solutions</div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="c-r">
                        <div class="c-box">   
                            <div class="text-20">Web 3.0 Technology</div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div>Blockchain Infrastructure</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div>Decentralized Systems</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div >Smart Contract Development</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div >Digital Asset Solutions</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div >Tokenization Platforms</div>
                            </div>
                            <div class="c-i-t">
                                <div class="img-box">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div >Web3 Security</div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="c-img">
                        <van-image :src="zhuanshi" width="220" height="215" fit="contain" alt=""/>
                        <div class="text-40"> Let’s connect to</div>
                        <div class="text-40">discover what we can </div>
                        <div class="text-40"> do for your business.</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="security">
            <div class="title">Security You Can Trust</div>
            <div class="sub-title">Astra is built with military-grade encryption, transparent access logs, and global regulatory compliance to keep your identity and data safe — whether you're an individual or an enterprise.</div>
            <div class="s-boxes">
                <div class="s-box">
                    <div class="s-item" :class="{ 'style1':index==0,'style2':index==1,'style3':index==2,'style4':index==3}" v-for="(item,index) in security" :key="item.index">
                        <div class="box">
                            <div class="img">
                                <van-image :src="item.icon" width="64" height="55" fit="contain" alt=""/>
                            </div>
                            <div class="name">{{ item.name }}</div>
                            <div class="desc">{{ item.desc }}</div>
                        </div>
                    
                    </div>
                </div>
            </div>
            
        </div>
        <div class="partners">
            <div class="p-left">
                <div class="title">Our</div>
                <div class="title">Partners</div>
                <div class="sub-title">We collaborate with leading platforms, protocols, and innovators to shape the future of secure digital identity and compliance.</div>
                <div class="p-l-img">
                    <van-image :src="zhuanshi1" width="140" height="248" fit="contain" alt=""/>
                </div>
            </div>
            <div class="p-right">
                <div class="scroll-p">
                    <div class="p-item" v-for="item in partners">
                        <div class="p-r-img">
                            <van-image :src="item.icon"  fit="contain" alt=""/>
                        </div>
                        <div class="name">{{ item.name }}</div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="questions">
            <div class="title">Frequently Asked Questions</div>
            <div class="sub-t">Have a question that is not answered?</div>
            <div class="sub-t">Email us at: <span>info@astraprotocol.com</span></div>
            <div class="content">
                <div class="item" v-for="item in askeds">
                    <div class="asked" @click="itemClick(item)">
                        <div>{{ item.name }}</div>
                        <div v-if="!item.show">+</div>
                        <div v-if="item.show">-</div>
                    </div>
                    <div class="question" v-show="item.show">
                        <div>
                            {{ item.row1 }}
                        </div>
                        <div v-if="item.row2">
                            {{ item.row2 }}
                        </div>
                        <div v-if="item.row3">
                            <ul>
                                <li v-for="it in item.row3">{{ it.li }}</li>
                            </ul>
                        </div>
                        <div v-if="item.row4">
                            {{ item.row4 }}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="latest">
            <div class="title">
                <div class="wz">Latest Insights on Compliance & Identity</div>
                <div class="text">Latest Insights</div>
                <div class="text">on Compliance</div>
                <div class="text">& Identity</div>
                <div class="hero">
                    <van-image :src="newHero" width="240" height="225" fit="contain" alt=""/>
                </div>
            </div>
            
            <div class="swipe">
                <div class="swipe-box">
                    <div class="btn">
                        <div @click="prevSlide"><svg width="24" height="12" viewBox="0 0 26 14" fill="none"><path d="M6.10274 0.261536C6.56098 -0.112038 7.23719 -0.08546 7.66427 0.341614C8.09109 0.768724 8.11789 1.44501 7.74435 1.90314L7.66427 1.992L3.9836 5.67267H23.8567C24.501 5.67267 25.0236 6.19533 25.0236 6.83966C25.0234 7.48379 24.5008 8.00665 23.8567 8.00665H3.9836L7.66427 11.6873C8.11941 12.143 8.11972 12.8823 7.66427 13.3377C7.2088 13.793 6.46948 13.7928 6.01388 13.3377L0.340049 7.66388C-0.113683 7.21022 -0.113683 6.4691 0.340049 6.01544L6.10274 0.261536Z" fill="white"></path></svg></div>
                        <div @click="nextSlide" style="transform: rotate(180deg);"><svg width="24" height="12" viewBox="0 0 26 14" fill="none"><path d="M6.10274 0.261536C6.56098 -0.112038 7.23719 -0.08546 7.66427 0.341614C8.09109 0.768724 8.11789 1.44501 7.74435 1.90314L7.66427 1.992L3.9836 5.67267H23.8567C24.501 5.67267 25.0236 6.19533 25.0236 6.83966C25.0234 7.48379 24.5008 8.00665 23.8567 8.00665H3.9836L7.66427 11.6873C8.11941 12.143 8.11972 12.8823 7.66427 13.3377C7.2088 13.793 6.46948 13.7928 6.01388 13.3377L0.340049 7.66388C-0.113683 7.21022 -0.113683 6.4691 0.340049 6.01544L6.10274 0.261536Z" fill="white"></path></svg></div>
                    </div>
                    
                    <div class="scroll" >
                    <div class="scroll-content" :style="{ transform: `translateX(-${currentIndex*33}%)` }">
                        <div class="swipe-item">
                            <van-image fit="fill" :src="swipe1" width="305" height="240"  alt=""/>
                            <div class="name">Why Self-Sovereign Identity Is the Future of Compliance</div>
                            <div class="time">Date Posted: 16-3-2025</div>
                        </div>
                        <div class="swipe-item">
                            <van-image fit="fill" :src="swipe2" width="305" height="240" alt=""/>
                            <div class="name">Understanding GDPR Compliance for Global Businesses</div>
                            <div class="time">Date Posted: 16-3-2025</div>
                        </div>
                        <div class="swipe-item">
                            <van-image fit="fill" :src="swipe3" width="305" height="240" alt=""/>
                            <div class="name">Navigating AML Regulations in the Digital Age</div>
                            <div class="time">Date Posted: 16-3-2025</div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="connect">
            <div class="title">Let's Connect</div>
            <div class="form">
                <div class="nameInput">
                    <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66666 5.83333C6.66666 6.71739 7.01785 7.56523 7.64297 8.19036C8.26809 8.81548 9.11593 9.16667 9.99999 9.16667C10.884 9.16667 11.7319 8.81548 12.357 8.19036C12.9821 7.56523 13.3333 6.71739 13.3333 5.83333C13.3333 4.94928 12.9821 4.10143 12.357 3.47631C11.7319 2.85119 10.884 2.5 9.99999 2.5C9.11593 2.5 8.26809 2.85119 7.64297 3.47631C7.01785 4.10143 6.66666 4.94928 6.66666 5.83333Z" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 17.5V15.8333C5 14.9493 5.35119 14.1014 5.97631 13.4763C6.60143 12.8512 7.44928 12.5 8.33333 12.5H11.6667C12.5507 12.5 13.3986 12.8512 14.0237 13.4763C14.6488 14.1014 15 14.9493 15 15.8333V17.5" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                    <div class="input"><input v-model="form.name" placeholder="Name"/></div>
                    <div class="msg"></div>
                </div>
                <div class="email">
                    <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5.83366C2.5 5.39163 2.67559 4.96771 2.98816 4.65515C3.30072 4.34259 3.72464 4.16699 4.16667 4.16699H15.8333C16.2754 4.16699 16.6993 4.34259 17.0118 4.65515C17.3244 4.96771 17.5 5.39163 17.5 5.83366V14.167C17.5 14.609 17.3244 15.0329 17.0118 15.3455C16.6993 15.6581 16.2754 15.8337 15.8333 15.8337H4.16667C3.72464 15.8337 3.30072 15.6581 2.98816 15.3455C2.67559 15.0329 2.5 14.609 2.5 14.167V5.83366Z" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5 5.83301L10 10.833L17.5 5.83301" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                    <div class="input"><input v-model="form.name" placeholder="Email"/></div>
                    <div class="msg"></div>
                </div>
                <div class="phone">
                    <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16667 3.33301H7.5L9.16667 7.49967L7.08333 8.74967C7.9758 10.5593 9.44039 12.0239 11.25 12.9163L12.5 10.833L16.6667 12.4997V15.833C16.6667 16.275 16.4911 16.699 16.1785 17.0115C15.866 17.3241 15.442 17.4997 15 17.4997C11.7494 17.3021 8.68346 15.9218 6.38069 13.619C4.07792 11.3162 2.69754 8.25029 2.5 4.99967C2.5 4.55765 2.67559 4.13372 2.98816 3.82116C3.30072 3.5086 3.72464 3.33301 4.16667 3.33301Z" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                    <div class="input"><input v-model="form.name" placeholder="Contact"/></div>
                    <div class="msg"></div>
                </div>
                <div class="select">
                    <div><svg id="dropdown-arrow" class="transition-transform duration-300" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5L10 12.5L15 7.5" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                    <div class="input">
                        <select aria-placeholder="Select Purpose">
                            <option value="en">English</option>
                            <option value="zh">中文</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                        </select>
                    </div>
                    <div class="msg"></div>
                </div>
                <div class="textarea">
                    <textarea  v-model="form.message" placeholder="Message"></textarea>
                    <div class="msg"></div>
                </div>
                <div class="send">
                    <div >Send Message</div>
                </div>
                <div class="img-box">
                    <van-image fit="fill" :src="lg1" width="48" height="48"  alt=""/>
                    <van-image fit="fill" :src="lg2" width="48" height="48"  alt=""/>
                    <van-image fit="fill" :src="lg3" width="48" height="48"  alt=""/>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <div class="bg">
                    <div style="width:12%">
                        <van-image fit="fill" :src="logot" width="48" height="48"  alt=""/>
                    </div>
                    <div style="width:40%">App coming soon</div>
                    <div class="icon icon1"><svg width="17" height="17" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 14.6726C16.5359 15.7135 16.3123 16.1783 15.7145 17.0987C14.8807 18.3828 13.703 19.9828 12.2455 19.9965C10.951 20.0078 10.6184 19.1442 8.85974 19.1544C7.10224 19.1635 6.73591 20.0124 5.44025 19.9999C3.98278 19.9862 2.86692 18.5419 2.032 17.2567C-0.301978 13.6658 -0.545827 9.44994 0.893664 7.20791C1.91625 5.61587 3.53104 4.68406 5.04807 4.68406C6.59319 4.68406 7.56521 5.54087 8.84176 5.54087C10.0812 5.54087 10.8364 4.68179 12.6231 4.68179C13.9716 4.68179 15.4032 5.4261 16.4224 6.71018C13.0827 8.56131 13.6243 13.384 17 14.6726ZM11.2679 3.24771C11.9163 2.40453 12.4096 1.2159 12.2309 0C11.1701 0.0738631 9.93065 0.755677 9.20585 1.64544C8.5496 2.45226 8.00684 3.64884 8.21697 4.81247C9.37441 4.84769 10.5723 4.14884 11.2679 3.24771Z" fill="white"></path></svg></div>
                    <div class="icon icon2"><svg class="fill-white" width="17" height="17" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z" fill="white"></path></svg></div>
                </div>
                <div class="reserved">© 2025 ASTRA. All rights reserved.</div>
            </div>
            <div class="right">
                <div>Home</div>
                <div>Partners</div>
                <div>Features</div>
                <div>Solutions</div>
            </div>
            <div class="reserved1">© 2025 ASTRA. All rights reserved.</div>
        </div>
        
        <div class="bottom-bg"></div>
    </div>
  </template>
  
  <script setup>

import { ref, onMounted, onUnmounted } from 'vue'
    const logo = new URL('../../assets/svg/s2/logo.svg', import.meta.url).href;
    const logoSmall = new URL('../../assets/images/img2/logo.png', import.meta.url).href;
    const phone = new URL('../../assets/images/img2/phone.png', import.meta.url).href;
    const mobiel = new URL('../../assets/images/img2/phone1.png', import.meta.url).href;
    const zhuanshi = new URL('../../assets/images/img2/zs.gif', import.meta.url).href;
    const zhuanshi1 = new URL('../../assets/images/img2/zs1.gif', import.meta.url).href;
    const newHero = new URL('../../assets/images/img2/newHero.gif', import.meta.url).href;
    const swipe1 = new URL('../../assets/images/img2/i1.png', import.meta.url).href;
    const swipe2 = new URL('../../assets/images/img2/i2.png', import.meta.url).href;
    const swipe3 = new URL('../../assets/images/img2/i3.png', import.meta.url).href;

    const lg1 = new URL('../../assets/images/img2/2.png', import.meta.url).href;
    const lg2 = new URL('../../assets/images/img2/3.png', import.meta.url).href;
    const lg3 = new URL('../../assets/images/img2/6.png', import.meta.url).href;

    const logot = new URL('../../assets/svg/s2/logot.svg', import.meta.url).href;
    const form = ref({
        name: '',
        email: '',
        contact: '',
        message: ''
    });
    

const work = ref([
        { index:'01', name: 'Email Sign Up', icon: new URL('../../assets/svg/s2/01.svg', import.meta.url).href },
        { index:'02', name: 'Verify Identity (KYC, Face Scan, Document Upload)', icon: new URL('../../assets/images/img2/03svg.png', import.meta.url).href },
        { index:'03', name: 'Connect Your Wallet and Tokenize your Identity', icon: new URL('../../assets/svg/s2/02.svg', import.meta.url).href },
        { index:'04', name: 'Use Your Verified Identity Across Platforms', icon: new URL('../../assets/svg/s2/03.svg', import.meta.url).href },
        { index:'05', name: 'Manage Permissions & Compliance', icon: new URL('../../assets/svg/s2/04.svg', import.meta.url).href },

    ])
    const security = ref([
        { desc:'Your data is encrypted from device to destination—ensuring that only you and authorized parties can access it.', name: 'End-to-End Encryption', icon: new URL('../../assets/svg/s2/se1.svg', import.meta.url).href },
        { desc:'Astra is built with international standards in mind, adhering to regulations like GDPR and FATF for data protection and financial integrity.', name: 'GDPR & FATF Compliance', icon: new URL('../../assets/svg/s2/se2.svg', import.meta.url).href },
        { desc:'Every access, edit, and share is recorded in a tamper-proof log, giving you full visibility and traceability.', name: 'Audit Logs & Permission Trails', icon: new URL('../../assets/svg/s2/se3.svg', import.meta.url).href },
        { desc:'For high-risk operations, Astra supports multi-signature authentication to add an extra layer of user-controlled security.', name: 'Multi-Sig for Sensitive Actions', icon: new URL('../../assets/svg/s2/se4.svg', import.meta.url).href },
    ])
    const partners = ref([
        { name: 'GDA Capital', icon: new URL('../../assets/images/img2/p1.png', import.meta.url).href },
        { name: 'Moonrock Capital', icon: new URL('../../assets/images/img2/p2.png', import.meta.url).href },
        { name: 'LD Capital', icon: new URL('../../assets/images/img2/p3.png', import.meta.url).href },
        { name: 'Republic Crypto', icon: new URL('../../assets/images/img2/p4.png', import.meta.url).href },
        { name: 'Wave Digital Assets', icon: new URL('../../assets/images/img2/p5.png', import.meta.url).href },
        { name: 'Delta Blockchain Fund', icon: new URL('../../assets/images/img2/p6.png', import.meta.url).href },
    ])
    const askeds = ref([
        {
            show:false,
            name: 'What is Astra and how does it work?',
            row1: 'Astra is an advanced AI-powered Know Your Customer (KYC) and digital identity platform built on Layer-2 blockchain infrastructure. It enables secure, verifiable identity creation and credential sharing across governments, enterprises, and decentralized platforms.',
            row2: 'The platform works by combining several key technologies:',
            row3: [
                { li: 'AI-powered document scanning and biometric verification for fast and accurate identity validation' },
                { li: 'Blockchain technology for secure, tamper-proof record-keeping and credential tokenisation' },
                { li:'Comprehensive compliance layers that ensure regulatory adherence across jurisdictions'},
            ],
            row4:'Astra empowers users to own and control their digital identities while simplifying compliance workflows for institutions, creating a bridge between traditional finance and decentralized systems.'
        },
        {
            show:false,
            name: 'How secure is my personal information?',
            row1: 'Your personal information in Astra is protected by multiple layers of security:',
            row2:'',
            row3: [
                { li: 'End-to-end encryption for all data transmission' },
                {li:'Biometric authentication (facial recognition) for access control'},
                { li: 'Zero-knowledge proofs allowing selective disclosure of information' },
                {li:'Compliance with global data protection regulations'},
                {li:'Regular security audits and penetration testing'},
            ],
            row4: "Additionally, Astra's unique approach allows you to maintain full control over who sees your information and when. You can selectively share specific credentials without exposing your entire identity profile, ensuring your privacy while still meeting verification requirements."
        },
        {
            show:false,
            name: 'How secure is my personal information?',
            row1: 'Astra accepts multiple types of government-issued identification documents, including:',
            row2: '',
            row3: [
                { li: 'National ID cards/CNIC cards' },
                { li: 'Passports' },
                { li: "Driver's licenses" },
                {li:'Utility bills (for address verification)'},
                {li:'Bank statements (for address verification)'},
            ]
        },
        {
            show:false,
            name: 'How can my company integrate Astra?',
            row1: 'Contact Us.',
            row2: '',
            row3: ''
        },
        {
            show:false,
            name: 'How can my company integrate Astra?',
            row1: "Only entities that you explicitly authorise will have access to your shared data. Astra's permission management system gives you complete control over:",
            row2: '',
            row3: [
                { li: "Which specific credentials are shared (e.g., only your age verification without revealing your full date of birth)" },
                {li:"The duration for which access is granted (temporary or permanent)"},
                { li: "The purpose for which your data can be used" },
                {li:"Revoking access at any time through the platform"},
            ],
            row4:'You can review your sharing history at any time through the Astra dashboard, seeing exactly who has accessed which parts of your information and when. Institutions receiving your shared credentials can only verify the validity of the information without storing copies of your original documents.'
        },
    ])
    const itemClick = (item) => {
        askeds.value.forEach(element => {
            if (item.name !== element.name) {
                element.show = false
            }   
        });
        item.show = !item.show;
    }

    const circleItems = ref([]);
    for (let i = 1; i <= 36; i++) {
        circleItems.value.push({index:i,icon:new URL('../../assets/svg/s2/y'+i+'.svg', import.meta.url).href});
    }

    const radius = ref(1000); 
        
    const currentIndex = ref(0);
    let intervalId = null;

    // 自动播放
    const startAutoPlay = () => {
    intervalId = setInterval(() => {
        nextSlide();
    }, 4000); // 每3秒切换
    };

    // 停止自动播放
    const stopAutoPlay = () => {
        clearInterval(intervalId);
    };

    // 下一张
    const nextSlide = () => {
        if (currentIndex.value < 1) { // 只有两组：0（第一张+第二张），1（第二张+第三张）
            currentIndex.value++;
        } else {
            currentIndex.value = 0; // 播到第二组（第二张+第三张）后退回第一组
        }
    };

    // 上一张
    const prevSlide = () => {
        if (currentIndex.value > 0) {
            currentIndex.value--;
        } else {
            currentIndex.value = 1; // 从第一组退到第二组
        }
    };

    // 组件挂载时开始自动播放，卸载时停止
    onMounted(() => {
        startAutoPlay();
    });

    onUnmounted(() => {
        stopAutoPlay();
    });

  </script>
  
  <style scoped>
  body{
    background-color: rgb(0 0 0 / 6);
  }
  .bottom-bg{
    position: absolute;
    height: 280px;
    width: 280px;
    filter: blur(100px);
    bottom: 5%;
    left: -14%;
    z-index: 1;
    /* animation: zoomGlow 4s ease-in-out infinite; */
    background: linear-gradient(135deg, #FF842D, #FF2D55);
  }
  .page{
    position:relative;
    width:100%;
    background-color: rgb(0 0 0 / 6);
    padding-top:68px;
    .connect{
        padding-bottom:50px;
        position:relative;
        z-index:100;
        .title{
            font-size:60px;
            font-weight:600;
            color:#ffffff;
            text-align: center;
            margin:60px 0;
            margin-top:150px;
            
        }
        .form{
            width: 80%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            .nameInput,.email,.phone,.select,.textarea{
                display: flex;
                flex-wrap: wrap;
                justify-content: left;
                align-items: center;
                width: 45%;
                margin-right: 10px;
                margin-left: 10px;
                margin-bottom: 20px;
                padding-left:10px;
                position: relative;
                border:1px solid rgba(250,250,250,0.5);
                border-radius:5px;
                background-color: rgba(0, 0, 0 ,0.6);
                input,select{
                    width:100%;
                    height:50px;
                     background-color: rgba(0, 0, 0 ,0.6);
                     border:none;
                     margin-left:5px;
                }
                .input{
                    width:80%;
                    
                }
                .msg{
                    position:absolute;
                    bottom:-20px;
                    left:0;
                    color:red;
                }
                
            }
            .textarea{
                resize: none;
                border:1px solid rgba(250,250,250,0.5);
                width:100%;
                height:150px;
                width:calc(90% + 20px);
                textarea{
                    width:100%;
                    border:none;
                    height:130px;
                    background-color: rgb(0 0 0 / 6);
                }
            }
            .send{
                    width:calc(90% + 20px);
                    height:50px;
                    background: #ffffff;
                    border-radius: 5px;
                    line-height: 50px;
                    text-align: center;
                    color:#000000;
                    font-size:20px;
                    font-weight:600;
                    cursor:pointer;
                    /* margin-left:-20px; */
            }
            .send:hover{
                background: linear-gradient(135deg, #FF842D, #FF2D55);
                 color:#ffffff;
            }
            .img-box{
                width:100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                margin-top:40px;
                div{
                    margin-right: 30px;
                    margin-bottom: 10px;
                }
            }
        }
    }
    .bottom{
        height:300px;
        border-top:1px solid rgba(250,250,250,0.5);
        display:flex;
        padding:5%;
        color:#ffffff;
        .left{
            width:35%;
            .bg{
                display:flex;
                justify-content: space-between;
                align-items: center;
                padding:0 20px;
                height:100px;
                min-width:368px;
                border-radius:10px;
                background: linear-gradient(to bottom, #2d2d2d, #1a1a1a);
                .icon{
                    width:40px;
                    height:40px;
                    text-align: center;
                    line-height: 40px;
                    border-radius: 20px;
                    border:1px solid #ffffff;
                }
                .icon1{
                    margin-left:50px;
                }
            }
            .reserved{
                min-width:368px;
            }
        }
        .reserved1{
            display:none;
        }
        .right{
            color:#ffffff;
            width:65%;
            text-align: center;
            div{
                margin-top:20px;
            }
            
        }
    }
    .latest{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top:150px;
        .wz{
            display:none;
        }
        .title{
            font-size:60px;
            font-weight:600;
            color:#ffffff;
            width:38%;
            padding-left: 5%;
            div{
                line-height:1;
            }
        }
        .hero{
            text-align: center;
            margin-top:50px;
        }
        .btn{
            width:10%;
            text-align: right;
            
            div{
                margin-top: 20px;
                border:1px solid rgba(250,250,250,0.5);
                height:70px;
                width:70px;
                border-radius:35px;
                line-height: 70px;
                text-align:center;
            }
            div:nth-child(2){
                margin-top: 20px;
            }
            div:hover{
                background: radial-gradient(circle, #ff6c15, #ff2e63); 
            }
        }
        .swipe{
            
            width:62%;
            .swipe-box{
                display: flex;
                flex-wrap: wrap;
                justify-content: left;
            }
            .scroll-content{
                width:1055px;
                display: flex;
                /* animation: lsatSlide1 20s infinite ease-in-out;  */
            }
            .scroll{
                width:700px;
                overflow: hidden;
                display: flex;
                flex-wrap: nowrap;
                justify-content: left;
                .swipe-item{
                    margin-right: 20px;
                    padding:15px;
                    border:1px solid rgba(250,250,250,0.8);
                    border-radius: 20px;
                    width:345px;
                    /* height:279px; */
                    text-align: center;
                }
                .name{
                    font-size: 25px;
                    font-weight: 600;
                    color:#ffffff;
                    text-align:left;
                    margin-top:30px;
                }
                .time{
                    color:#ffffff;
                    text-align:left
                }
            }
           
        }
    }
    .header{
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        height: 68px;
        top:0;
        left: 0;
        width: 100%;
        z-index: 1000;
        border-bottom:1px solid rgba(250,250,250,0.5);
        .left{
            display:inline-block;
            width:20%;
            padding-left:30px;
        }
        .middle{
            display:inline-block;
            width:50%;
            color:#fff;
            text-align: right;
            padding-right: 30px;
            div{
                display:inline-block;
                font-size:18px;
                margin-right:40px;
            }
        }
        .right{
            width:28%;
            display: flex;
            flex-wrap: wrap;
            justify-content: right;
            align-items: center;
            .menu{
                display: none;
                background-color: #ffffff;
                border-radius: 8px;
                margin-left: 25px;
                padding: 5px 8px 0 8px;
            }
            .right-icon{
                background-color: rgba(250, 250, 250, 0.2);
                padding:10px 20px;
                border-radius: 3px;
                .num{
                    margin-left: 15px;
                    padding-left: 15px;
                    
                    border-left:1px solid rgba(250,250,250,0.5)
                }
            }
            .req{
                width: 138px;
                height: 46px; 
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                margin-left:40px;
                margin-right: 20px;
                /* padding:10px 15px; */
                border-radius: 5px;
                font-size:18px;
                font-weight: 600;
                background: linear-gradient(10deg, #0EAA04, #084C03, #084C03, #0EAA04);
                .reg-text{
                    /* padding:9px 14px; */
                    text-align: center;
                    width: 137px;
                    height: 44px;
                    border-radius: 5px;
                    line-height: 46px;
                    background: rgba(0,0,0,0.6);
                }
            }
            div{
                display:inline-block;
                color:#fff;
            }
        }
    }
    .mp4{
        width:100%;
        position: relative;
        height: 720px;
        video{
            width:100%;
            object-fit: cover;
            object-position: bottom;
            height: 100%;
            position: absolute;
            display: block;
            vertical-align: middle;
        }
        .p-1{
            position: absolute;
            top:80px;
            z-index: 100;
            color: #fff;
            text-align: center;
            width: 100%;
            .text{
                font-size: 65px; 
                font-family: Arial, sans-serif;
                font-weight: bold;
                background: linear-gradient(to right, #ff6c15, #ff2e63); 
                -webkit-background-clip: text; 
                background-clip: text;
                color: transparent; 

            }
        }
        .p-1-btn{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width:100%;
            font-size: 20px;
            margin-top:40px;
            .p-btn{
                width:200px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                
            }
            .btn1{
                border:1px solid #ffffff;
                margin-right: 10px;
                padding:8px 10px;
                border-radius: 5px;
                margin-bottom:15px;
            }
            .btn-box{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width:228px;
                height:44px;
                margin-top:1px;
                background: rgba(0,0,0,0.6);
                border-radius: 5px;
            }
            .btn2{
                width:230px;
                height:46px;
                margin-left:10px;
                background: linear-gradient(10deg, #0EAA04, #084C03, #084C03, #0EAA04);
                border-radius: 5px;
            }
        }
        .p-1-l{
            font-size:65px;
            font-weight: 600;
            text-align: center;
        }
        .p-1-s{
            text-align: center;
            font-size:19px;
        }
    }
    .built{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-left: 6%;
        padding-right:6%;
        margin-top:150px;
        margin-bottom:100px;
        .smallImg{
            display:none;
        }
        .text{
            color:#ffffff;
        }
        .text-60{
            font-size: 60px;
            line-height:1;
        }
        .text-40{
            font-size: 40px;
            color:#ffffff;
        }
        .text-18{
            margin-top:20px;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 50px;
        }
        .b-left{
            width:58%;
            width:780px;
        }
        .show-phone{
            display:none;
        }
        .content{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .c-i-t{
                display: flex;
                flex-wrap: wrap;
                justify-content: left;
                font-size: 18px;
                color:#ffffff;
                margin-bottom: 15px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                padding-bottom:15px;
                div:nth-child(2){
                    padding-top:5px;
                }
            }
            .text-20{
                font-size: 28px;
                font-weight: 600;
                color:#ffffff;
                margin-bottom: 15px;
                text-align: left;
            }
            .img-box{
                width:40px;
                height:40px;
                background: rgba(255,255,255,0.3);
                border-radius: 20px;
                text-align: center;
                line-height: 40px;
                margin-right:10px;
            }
            .c-l{
                border-radius: 15px;
                background: linear-gradient(135deg, #FF2D55, #FF842D, #00000033, #FFFFFF33, #FF842D, #FF2D55);
                width:370px;
                text-align: center;
                padding-top:1px;
                height:280px;
                margin-bottom:40px
            }
            .c-box{
                    background:rgba(0, 0, 0, 0.9);
                    height:278px;
                    border-radius: 15px;
                    width:368px;
                    margin-left: 1px;
                    padding:20px;
                }
            .c-r{
                border-radius: 15px;
                background: linear-gradient(135deg, #FF2D55, #FF842D, #00000033, #FFFFFF33, #FF842D, #FF2D55);
                width:370px;
                text-align: center;
                padding-top:1px;
                height:280px;
            }
        }
    }
    .work{
        margin-bottom: 80px;
        .title{
            font-size:50px;
            font-weight: 600;
            text-align: center;
            color:#ffffff;
            margin-bottom:40px;
        }
        .w-box{
            display:flex;
            justify-content: left;
            flex-wrap:wrap;
            width:90%;
            margin-left: 5%;
            .w-item{
                position: relative;
                padding-top:20px;
                width:20%;
                text-align: center;
                min-width:250px;
                border-bottom:1px solid rgba(250, 250, 250, 0.3);
                border-left:1px solid rgba(250, 250, 250, 0.3);
                .name{
                    color:#ffffff;
                    margin-top:20px;
                    margin-bottom: 20px;
                    padding:0 18px;
                }
                .index{color:rgba(250, 250, 250, 0.1);
                    font-size: 40px;
                    font-weight: 600;
            
                }
                .index:hover{
                    color:#ffffff;
                }
            }
            .w-item:nth-child(1){
                border-left:none;
                .index{
                    margin-top:45px;
                }
            }
            .point{
                width: 12px; 
                height: 12px;
                background: radial-gradient(circle, #ff6c15, #ff2e63); 
                border-radius: 50%; 
                box-shadow: 0 0 20px rgba(255, 108, 21, 0.5);
                position: absolute;
                bottom:-6px;
                left:-6px;
            }
          
        }
    }
    .product{
        display:flex;
        padding:0 8%;
        .smallImg{
            display:none;
        }
        .show-p{
            display: none;
        }
        .pr-left{
            width:60%;
        }
        .text-60{
            color:#fff;
            font-size:60px;  
            font-weight: 600;
        }
        .text-40{
            margin-top:80px;
            color:#fff;
            font-size:35px;  
            font-weight: 600;
        }
        .text-18{
            color:#fff;
            font-size:18px;  
            font-weight: 600;
        }
        .btn{
            display:flex;
            padding-left: 20px;
            div{
                color:#fff;
                font-size:18px; 
                padding:10px 15px;
                border:1px solid rgba(250, 250, 250, 0.5);
                border-radius: 25px;
                margin-right:20px;
                margin-top:20px;
            }
        }
        ul{
            margin-top:30px;
            list-style-type: disc;
            padding:0 5%;
            li{
                color:#ffffff;
                font-size: 18px;
                padding: 7px;
                font-weight: 600;
            }
            li::marker {
                color: #ffffff; 
            }
        }
    }
    .platform{
        width:100%;
        margin-top:50px;
        .title{
            font-size:60px;
            font-weight: 600;
            text-align: center;
            color:#ffffff;
            /* margin-bottom:60px; */
        }
        .red-bg{
            position: absolute;
            background-image:url('../../assets/images/img2/redBg.png');
            background-position: center center;
            width:100%;
            height:100%;
            top:100px;
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height:550px;
            overflow: hidden;
            margin:0 auto;
            position:relative;
            /* height: 100vh; */
            /* background-color: #f0f0f0; */
            /* 大圆 */
            .big-circle {
                margin-top: 1650px;
                width: 2000px;
                height: 2000px;
                /* border: 2px solid #333; */
                border-radius: 50%;
                position: relative;
            }

            /* 小圆通用样式 */
            .small-circle {
                width: 80px;
                height: 80px;
                /* background-color: #ff4d4f; */
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                margin: -40px 0 0 -40px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                animation: rotate 150s linear infinite;
                animation-delay: var(--animationDelay);
                transform: rotate(var(--initialRotate)) translate(var(--translateX), 0);
            }

            /* 小圆内的文字保持正向 */
            .small-circle-text {
                content: "";
                display: block;
                transform: rotate(calc(-2 * var(--initialRotate)));
                animation: counterRotate 150s linear infinite;
                animation-delay: inherit;
            }
            .t-box{
                position:absolute;
                top:100px;
                width:100%;
                .title{
                    font-size: 30px;
                    color: #ffffff;
                    text-align: center;
                    margin-bottom: 10px;
                }
                .t-16{
                    color: #ffffff;
                    text-align: center;
                }
                .t-btn{
                    display:flex;
                    justify-content: center;
                }
                .btn-box{
                    width: 150px;
                    height: 50px;
                    border:1px solid rgba(255,255,255,0.9);
                    border-radius: 10px;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    color:#ffffff;
                    font-size:18px;
                    margin:40px 5px; 
                }
                .btn{margin-left:5px;}
            }
        }
    }
    .technology{
        .content{
            justify-content: center !important;
        }
        .b-left{
            width:100% !important;
            /* width:1200px; */
        }
        .c-i-t{
            margin-bottom:0px !important;
            border-bottom:none !important;
        }
        .c-l{
            height:430px!important;
            margin-right:25px;
           
            .c-box{
                height:428px!important;
            }
        }
        .c-r{
            height:430px!important;
            .c-box{
                height:428px!important;
            }
            
        }
        .c-img{
            text-align: center;
            width:40%;
            .text-40{
                line-height:50px;
            }
        }
    }
    .security{
        margin-bottom: 80px;
        .title{
            font-size:50px;
            font-weight: 600;
            text-align: center;
            color:#ffffff;
            margin-bottom:30px;
        }
        .sub-title{
            font-size:20px;
            font-weight: 600;
            padding:0 28%;
            text-align: center;
            color:#ddd;
        }
        .s-boxes{
            width:98%;
            margin-left:1%;
        }
        .s-box{
            display:flex;
            justify-content: left;
            flex-wrap:wrap;
            width:90%;
            /* min-width:1280px; */
            margin:0 auto;
            margin-top:80px;
            
            .s-item{
                position: relative;
                /* padding-top:20px; */
                width:23%;
                margin-left: 1%;
                margin-right: 1%;
                text-align: left;
                border-radius:20px;
                margin-bottom:20px;
                height:380px;
                min-width:250px;
                .box{
                    width:99%;
                    margin:0 auto;
                    height:378px;
                    background:rgba(0,0,0,0.9);
                    border-radius:20px;
                    margin-top:1px;
                    padding:0 20px;
                }
                .name{
                    color:#ffffff;
                    font-size:24px;
                    margin-bottom:30px;
                }
                .img{
                    padding: 25px 0;
                    text-align:left;
                }
                .desc{
                    color:#ffffff;
                    font-size:16px;
                }

            }
            .style1{
                background: linear-gradient(to right bottom, #4B4B4B, #ba90ff, #ba90ff, #4B4B4B);
            }
            .style2{
                background: linear-gradient(to right bottom, #4B4B4B, #1ea51f, #1ea51f, #4B4B4B);
            }
            .style3{
                background: linear-gradient(to right bottom, #4B4B4B, #ff749f, #ff749f, #4B4B4B);
            }
            .style4{
                background: linear-gradient(to right bottom, #4B4B4B, #E46800, #E46800, #4B4B4B);
            }

          
        }
    }
    .partners{
        display:flex;
        justify-content: left;
        flex-wrap:wrap;
        padding:0 5%;
        .p-left{
            width:30%;
            .title{
                font-size:65px;
                font-weight: 600;
                color:#ffffff;
                line-height:1;
            }
            .sub-title{
                font-size:20px;
                color:#dddddd;
            }
            .p-l-img{
                text-align:center;
            }
        }
        .p-right{
            width:70%;
            padding:15px;
            .scroll-p{
                
                display:flex;
                justify-content: center;
                flex-wrap:wrap;
            }
            .p-item{
                width:30%;
                margin-left: 1%;
                margin-right: 1%;
                border-radius: 20px;
                border:1px solid rgba(255,255,255,0.6);
                margin-top:20px;
                padding:20px 0;
                text-align:center;
                .name{
                    border-top:1px  solid rgba(255,255,255,0.5);
                    padding:20px 0;
                    text-align:center;
                    color:#ffffff;
                    font-size:20px;
                }
            }
            
        }
    }
    .questions{
        .title{
            font-size:70px;
            color:#ffffff;
            font-weight: 600;
            text-align:center;
        }
        .sub-t{
            font-size:18px;
            font-weight: 600;
            color:#ffffff;
            text-align:center;
            span{
                color:#ff842d;
            };
        }
        .content{
            .item{
                width:65%;
                margin:20px auto;
                padding:20px;
                border:1px solid rgba(255, 255, 255, 0.8);
                border-radius: 20px;
                .asked{
                    font-size:25px;
                    font-weight: 600;
                    color:#ffffff;
                    text-align:center;
                    justify-content: space-between;
                    display: flex;
                    cursor: pointer;
                   
                }
                .question{
                    margin-top:20px;
                    color:#ddd;
                    font-size:18px;
                    ul{
                        list-style-type: disc;
                        padding-left:20px;
                        li::marker {
                            color: #ffffff; 
                        }
                    }
                }
            }

        }
    }

    .text-l{
        color:#fff;
        font-size:45px;
    }
    .text-m{
        color:#fff;
        font-size:25px;
    }
    .text-s{
        font-size: .875rem;
        line-height: 1.25rem;
    }
  }

/* 文字反向旋转动画 */
@keyframes counterRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

/* 圆周运动动画 */
@keyframes rotate {
  from {
    transform: rotate(0deg) translate(var(--translateX), 0);
  }
  to {
    transform: rotate(360deg) translate(var(--translateX), 0);
  }
}

@keyframes slide {
  0% {
    transform: translateX(5%);
  }
  50% {
    transform: translateX(-30%); 
  }
  100% {
    transform: translateX(5%); 
  }
}
@keyframes slide1 {
  0% {
    transform: translateX(5%);
  }
  50% {
    transform: translateX(-45%); 
  }
  100% {
    transform: translateX(5%); 
  }
}
@keyframes slide2 {
  0% {
    transform: translateX(5%);
  }
  50% {
    transform: translateX(-68%); 
  }
  100% {
    transform: translateX(5%); 
  }
}
@keyframes slide3 {
  0% {
    transform: translateX(2%);
  }
  50% {
    transform: translateX(-78%); 
  }
  100% {
    transform: translateX(2%); 
  }
}
@keyframes lsatSlide {
  0% {
    transform: translateX(5%);
  }
  50% {
    transform: translateX(-66%); 
  }
  100% {
    transform: translateX(5%); 
  }
}
@keyframes lsatSlide1 {
  0% {
    transform: translateX(5%);
  }
  50% {
    transform: translateX(-33%); 
  }
  100% {
    transform: translateX(5%); 
  }
}
  @media (max-width: 531px) {
    .mp4{
        height:600px !important;
        overflow: hidden !important;
        .p-1{
            padding: 0 15px;
            top:50px !important;
        }
        .mp4{
            /* video{
                transform: scale(2.5)!important;
            } */
        }
        
        .p-1-l{
            font-size:25px !important;
            .text{
                font-size:25px !important;
            }
        }
        .p-1-s{
            font-size:18px !important;
        }
        .btn1{
            margin-right:0  !important;
        }
        .btn2{
            margin-left:0 !important;
        }
    }
     .security{
        .s-boxes{
            overflow:hidden;
        }
        .s-box{
            width:1100px !important;
            animation: slide2 12s infinite ease-in-out !important; 
        }
    }
    .scroll-content{
        width:1055px;
        display: flex;
        animation: lsatSlide 12s infinite ease-in-out; 
    }
    .bottom{
        padding:20px 0px!important;
        .left{
            width:98% !important;
            margin-left: 0 !important;
        }
        .bg{
            min-width: 100% !important;
            padding: 0 0px !important;
        }
    }
  }
  @media (max-width: 760px) {
    .work{
        .title{font-size:35px !important;}
        
        .w-box{
            .box{
                display: flex;

            }
        }
        .w-item{
            width:95% !important;
            margin:0 auto;
            padding:0 20px;
        }
        .box{
            align-items: center;
        }
        .index{
            display:none !important;
        }
    }
  }
  @media (max-width: 1280px) {
    .header{
        .left{
        padding-left:10px!important;
        }
        .req{
            display: none!important;
        }
        .middle{
            display: none!important;
        }
        .right{
            width: 70% !important;
        }
        .menu{
            margin-right: 10px!important;
            margin-left: 5px !important;
            display: inline-block !important;
        }
    }
    .mp4{
        .p-1{
            padding: 0 15px;
        }
        .p-1-l{
            font-size:35px !important;
            .text{
                font-size:35px !important;
            }
        }
        .p-1-s{
            font-size:18px !important;
        }
         /* video{
            transform: scale(1)!important; 
        } */
    }
    .product{
        .show-p{
            display: inline-block !important;
            margin-top:40px;
        }
        .pr-right{
            display: none !important;
        }
    }
    .partners{
        .p-right{
            width:100% !important;
            display:inline-block!important;
            overflow: hidden !important;
        }
        .p-left{width:100%!important;}
        .scroll-p{
            width:2000px!important;
            display:flex!important;
            flex-wrap:nowrap!important;
            animation: lsatSlide 20s infinite ease-in-out; 
            .p-item{
                width:300px !important;
            }
        }
    }
    .latest{
        .btn{display:none !important;}
        .wz{
            display:inline-block !important;
        }
        .text{
            display:none! important;
        }
        .title{width:96%!important;font-size:30px!important;}
        .swipe{
            width:96%!important;
            margin:30px auto !important;
        
            .scroll{
                width:100%!important;
            }
        }
    }
  }
 @media (max-width: 930px) {
    .security{
        .s-boxes{
            overflow:hidden;
        }
        .s-box{
            width:1100px !important;
            animation: slide 12s infinite ease-in-out; 
        }
    }
 }
  @media (max-width: 900px) {
    .technology{
        .text-60{
            font-size: 40px !important;
        }
        .c-l{
            width:100% !important;
            margin-right:0px !important;
        }
        .c-box{
            width:calc(100% - 2px) !important;
        }
        .c-r{
            width:100% !important;
            margin-bottom:60px !important;
        }
        .c-img{
            width:100% !important;
            .text-40{
                font-size:30px !important;
                line-height:40px!important;
            }
        }
    }
    .pr-left{
            width:100% !important;
            text-align:center !important;

            .btn-box{
                width: 100% !important;
                /* height: 50px !important; */
                display:flex;
                overflow-x: auto;
                padding: 0 0 20px;
                .btn{
                    width:500px !important;
                    height:80px !important;
                    div{
                        width:300px !important;
                        text-align: center;
                    }
                }
            }
            .show-p{
                margin-top:0px !important;
            }
            .text-40{
                font-size: 30px !important;
                margin-top:0px !important;
                text-align:left !important;
            }
            .text-18{
               text-align:left !important; 
            }
            li{
                text-align:left !important;
                font-weight: 600; 
            }
        }
    .platform{
        .title{
            font-size:30px  !important;   
        }
        .t-box{
            .title{
                font-size: 20px !important;
            }
            
        }
    }
    .technology{
        margin-top:0px!important;
    }
     .questions{
        .title{
            font-size:30px !important;  
        }
        .sub-t{
            font-size:15px !important; 
        }
        .content{
            .item{
                width:80% !important;
                margin-left: 10% !important;
                padding:10px !important;
                .asked{
                    font-size:20px !important;
                    padding-right:15px!important;
                }
                .question{
                    font-size:16px !important; 
                }
            }
        }
    }
  }
  @media (max-width: 780px) {
    .smallImg{
        display:inline-block !important;    
    }
    .bigImg{
        display:none !important;  
    }        
    .built{
        
        .b-right{
            display:none !important;
        }
        .b-left{
            width:100% !important
        }
        .show-phone{
            display:inline-block !important;
        }
        .c-l{
            width:100% !important;
        }
        .c-box{
            width:calc(100% - 2px) !important;
        }
        .c-r{
            width:100% !important;
        }
        .c-img{
            text-align: center;
            width:100%!important;
            margin-top:80px!important;
            margin-bottom:40px!important;
            .text-40{
                font-size:30px;
                line-height:40px!important;
            }
        }
    } 
    .product{
        padding:0 5% !important;
        .text-60{
            font-size: 30px !important;
        }  
    }
    .security{
        .title{
            font-size: 30px !important;
        } 
        .sub-title{
            font-size: 16px !important;
            padding:0 5% !important;
        }
        .s-box{
            margin-top:60px!important;
        }
    }
    .connect{
        .title{
            font-size:30px!important;
        }
        .form{
            width:90% !important;
            .nameInput,.email,.phone,.select,.textarea,.send{
                width:90% !important;
            }
        }
    }
    .bottom{
        display:inline-block !important;
        width:100%;
        height:380px !important;
        .left{
            width:93% !important;
            margin-left: 3% !important;
        }
        .right{
            text-align:left!important;
            margin-left: 3% !important;
        }
        .reserved{
            display:none !important;
        }
        .reserved1{
            width:100%;
            margin-top:30px;
            display:inline-block !important;
            text-align:center;
        }
    }
    .security{
        .s-boxes{
            overflow:hidden;
        }
        .s-box{
            width:1100px !important;
            animation: slide1 12s infinite ease-in-out; 
        }
    }
    .partners{
        
        .scroll-p{
            animation: slide3 20s infinite ease-in-out; 
        }
    }
  }
  @media (max-width: 1500px) {
    .built{
        .b-right{
        width:100vw !important;
        text-align: center!important;
    }
    } 
  }
   @media (min-width: 1280px) {
    
  }

  /* 自定义滚动条样式 */
::-webkit-scrollbar {
  /* 滚动条整体样式 */
  width: 4px; /* 垂直滚动条宽度 */
  height: 4px; /* 水平滚动条高度 */
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: rgb(0 0 0 / 6); /* 轨道背景色 */
  border-radius: 2px; /* 轨道圆角 */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #888; /* 滑块颜色 */
  border-radius: 10px; /* 滑块圆角 */
}

/* 滑块hover效果 */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* 滑块hover时的颜色 */
}
  </style>