document.getElementById("generate-plan").addEventListener("click", function() {
    const age = document.getElementById("age").value;
    const food = document.getElementById("food").value;

    if (!food) {
        alert("请输入食材名称！");
        return;
    }

    // 模拟返回的食谱
    const recipes = {
        "6-36 months": {
            "土豆": "土豆泥 + 胡萝卜泥",
            "玉米": "玉米糊 + 米糊"
        },
        "3-10 years": {
            "土豆": "土豆炖鸡肉",
            "玉米": "玉米炒蛋"
        }
    };

    // 显示推荐食谱
    document.getElementById("recipe-output").innerHTML = 
        `<p>${recipes[age][food] || "暂无食谱，请尝试其他食材"}</p>`;

    // 生成一周膳食计划（模拟数据）
    const mealPlan = {
        "Monday": "香蕉燕麦糊",
        "Tuesday": "胡萝卜苹果泥",
        "Wednesday": "鸡肉南瓜粥",
        "Thursday": "红薯米糊",
        "Friday": "牛油果香蕉泥",
        "Saturday": "菠菜土豆泥",
        "Sunday": "藜麦牛奶粥"
    };

    document.getElementById("meal-plan-output").innerHTML =
        Object.keys(mealPlan).map(day => `<p><strong>${day}:</strong> ${mealPlan[day]}</p>`).join("");
});
