<script setup>
    
    
    const props = defineProps({
        flag: URL,
        countryCurrensyAbbv: String,
        countryCurrensy: String,
        amount: Number,
    })

</script>
<template>
    <div class="exchangeCurrensy">
        <div class="country">
            <div>
                <img :src="flag" alt="India's Flag">
                <p>{{ countryCurrensyAbbv }}</p>
            </div>
            <p>{{ countryCurrensy }}</p>
        </div>
        <div class="amount">
            <p>{{ amount }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../../../../assets//stylesheets/variables';

    .exchangeCurrensy {
        width: 50%;
        border-radius: 1rem;
        .country {
            display: flex;
            padding: 1.7rem;
            flex-direction: column;
            align-items: center;
            gap: .9rem;
            flex: 1 0 0;
            background-color: variables.$grey_11;  
            border: .087rem solid variables.$grey_15;
            
            div {
                display: flex;
                align-items: center;
                gap: .9rem;
                align-self: stretch;
                
                img {
                    width: 3.5rem;
                    height: 3.5rem;
                    border-radius: 3.5rem;
                    border-radius: 3.5rem;
                    background: variables.$lightgray 50% / cover no-repeat;
                }
                
                p {
                    font-size: 1.6rem;
                    font-weight: 400;
                    line-height: 150%; 
                    flex: 1 0 0;
                    margin-bottom: 0;
                    padding-bottom: 0;
                }
            }
            
            p {
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 300;
                line-height: 150%;
                align-self: stretch;
            }
        }
        
        .amount {
            display: flex;
            padding: 2.6rem 1.7rem;
            justify-content: center;
            align-items: center;
            gap: .9rem;
            flex: 1 0 0;
            background-color: variables.$grey_11;
            border: .087rem solid variables.$grey_15;
            
            p {
                flex: 1 0 0;
                font-size: 1.7rem;
                font-weight: 500;
                line-height: 150%;
            }
        }
    }
</style>