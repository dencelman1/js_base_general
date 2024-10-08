import {Fraction } from "#utils/general";

export default (
    () => {
        var
            p = Fraction.parse.bind(Fraction),
    
            res = [
                "1", // 0
                "-3.75", // 1
                "0.45", // 2
                "00005", // 3
                "-6.5", // 4
                "9.5", // 5
                "2.14159", // 6
                "-9.75", // 7
                "3.75", // 8
                "7.5", // 9
                "2", // 10
                "5.25", // 11
                "0.75", // 12
                "6.33333", // 13
                "-1", // 14
                "0.5", // 15
                "999999.9", // 16
                "-1.5", // 17
                "1.95", // 18
                "0.33334", // 19
                "9.9999", // 20

                "6", // 21
                "-7", // 22
                "-0.25", // 23
                "7", // 24
                "-16", // 25
                "1", // 26
                "3", // 27
                "-6.9", // 28
                "0", // 29
                "0.8", // 30
                "0", // 31
                "-0.9", // 32
                "-32", // 33
                "23.6", // 34
                "1.3333", // 35
                "-0.5", // 36
                "499999.9", // 37
                "-4", // 38
                "2",  // 39
                "9.99995", // 40
                "4.66667", // 41

                "-0.9889", // 42
                "-120000", // 43
                "8.53", // 44
                "50", // 45

                "-864197531.135802468", // 46
                "-0.999999999", // 47
                "-05000000000", // 48
                "-0.00002" // 49
            ],
    
            calls = 0
        ;
        calls = (
            [
                ["3","2"], // 0
                ["-3", "0.75"], // 1
                ["1.25", "0.8"], // 2
                ["5", "0"],  // 3
                ["-2.5", "-4"], // 4
                ["7.5", "-2"], // 5

                ["3.14159", "1"], // 6

                ["0.25", "10"], // 7

                ["4.75", "1"], // 8

                ["8", "0.5"], // 9
                ["4", "2"], // 10
                ["6", "0.75"], // 11
                ["1.5", "0.75"], // 12
                ["3","-3.33333"], // 13
                ["6", "7"], // 14
                ["2.5","2"], // 15
                ["1000000","0.1"], // 16
                ["0","1.5"], // 17
                ["3.2","1.25"], // 18
                ["1.00001","0.66667"], // 19
                ["10","0.0001"], // 20

                ["9","3"], // 21
                ["-4","-3"], // 22
                ["0.25","0.5"], // 23
                ["7","0"], // 24
                ["-8","8"], // 25
                ["6","5"], // 26
                ["5","2"], // 27
                ["-4.9","2"], // 28
                ["5.0","5.0"], // 29
                ["1","0.2"], // 30
                ["2.5","2.5"], // 31
                ["4.5","5.4"], // 32
                ["-7","25"], // 33
                ["25.6","2.0"], // 34
                ["1","-0.3333"], // 35
                ["2.5","3"], // 36
                ["500000","0.1"], // 37
                ["4","8"], // 38
                ["4","2"], // 39
                ["10","0.00005"], // 40
                ["5","0.33333"], // 41

                ["0.1111","1.1"], // 42
                ["5000","125000"], // 43
                ["5.50","-3.03"], // 44
                ["051","1"], // 45

                ["123456789.987654321","987654321.123456789"], // 46
                ["0.000000001","1"], // 47
                ["-5000000000","0"], // 48
                ["-0.00001","0.00001"], // 49
            ]
            
            .reduce((count, rs, i) => {
                var
                    value = p(rs[0]),

                    first = value.toString(),
                    second = p(rs[1]).toString(),
    
                    newRes = (
                        (
                            value['-'](rs[1])
                            .is(
                                res[ i ]
                            )
                        )
                    )
                ;

                (newRes === 1)
                ||
                console.dir({
                    title: "wrong",
                    i,
                    first,
                    second,
                    original: rs,
                    newRes,
                    text: `${value} !== ${res[i]}`
                })
                
                return count + (newRes)
            }, 0)
        );

        return (
            console.log(`[ ${calls} / ${res.length} ]`)
        );
    }
)
