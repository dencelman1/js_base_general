import {Fraction } from "#utils/general";


export default (
    () => {
        var
            p = Fraction.parse.bind(Fraction),
    
            res = [
                "3", "-3", "1", "0", "10", "-15", "3.14159", "2.5", "-4.75", "4", 
                "0.125", "4.5", "6", "-0.99999", "42", "7.5", "100", "0", "4", 
                "0.2222211111", "0.0001", 

                "9", "-12", "0.125", "0", "-64", "30", "10", "-9.8", "5.0", "0.04", 
                "6.25", "8.1", "-7", "25.6", "-0.3333", "7.5", "50", "2.5", "8.0", 
                "0.00005", "1.66665",

                "0.000122210000",
                "25000000",
                "-5.5",
                "051",

                "121932632103337905.662094193112635269",
                "1",
                "0",
                "-0.0000000001"
            ],
    
            calls = 0
        ;
        calls = (
            [
                () => p("1.5")["*"]("2"),
                () => p("-1.5")["*"]("2"),
                () => p("1.25")["*"]("0.8"),
                () => p("5")["*"]("0"),
                () => p("-2.5")["*"]("-4"),
                () => p("7.5")["*"]("-2"),
                () => p("3.14159")["*"]("1"),
                () => p("0.25")["*"]("10"),
                () => p("4.75")["*"]("-1"),
                () => p("8")["*"]("0.5"),
                () => p("-0.5")["*"]("-0.25"),
                () => p("6")["*"]("0.75"),
                () => p("1.5")["*"]("4"),
                () => p("3")["*"]("-0.33333"),
                () => p("6")["*"]("7"),
                () => p("2.5")["*"]("3"),
                () => p("1000000")["*"]("0.0001"),
                () => p("0")["*"]("1.5"),
                () => p("3.2")["*"]("1.25"),
                () => p("0.33333")["*"]("0.66667"),
                () => p("10")["*"]("0.00001"),

                () => p("3")["*"]("3"),
                () => p("-4")["*"]("3"),
                () => p("0.25")["*"]("0.5"),
                () => p("7")["*"]("0"),
                () => p("-8")["*"]("8"),
                () => p("6")["*"]("5"),
                () => p("5")["*"]("2"),
                () => p("-4.9")["*"]("2"),
                () => p("1.0")["*"]("5.0"),
                () => p("0.2")["*"]("0.2"),
                () => p("2.5")["*"]("2.5"),
                () => p("4.5")["*"]("1.8"),
                () => p("-1.4")["*"]("5"),
                () => p("3.2")["*"]("8"),
                () => p("1")["*"]("-0.3333"),
                () => p("2.5")["*"]("3"),
                () => p("500000")["*"]("0.0001"),
                () => p("1.25")["*"]("2"),
                () => p("4")["*"]("2"),
                () => p("10")["*"]("0.000005"),
                () => p("5")["*"]("0.33333"),

                () => p("0.1111")["*"]("0.001100"),
                () => p("5000")["*"]("5000"),
                () => p("5.50")["*"]("-1"),
                () => p("0102")["*"]("0.50"),

                () => p("123456789.987654321")["*"]("987654321.123456789"),
                () => p("0.000000001")["*"]("1000000000"),
                () => p("-5000000000")["*"]("0"),
                () => p("-0.00001")["*"]("0.00001"),
            ]
            .reduce((count, rs, i) => {
                var
                    value = rs(),
    
                    newRes = (
                        (
                            value
                            .is(
                                res[
                                    i
                                ]
                            )
                        )
                    )
                ;
                console.log(
                    `[ ${i} ]: ${newRes} result of  ${value} === ${res[i]} `
                )
                
                return (
                    count + Number(newRes)
                )
            }, 0)
        );
        
        return (
            console.log(`[ ${calls} / ${res.length} ]`)
        );
    }
)
