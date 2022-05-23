const reverse = (list) => {
    let newList = "";
    console.log("mylist", newList)
    for (let i = list.length -1; i >= 0; i--) {
        newList += list[i]
    }

    return newList;
}

console.log("reverse list", reverse("3, 4, 5, 6"))
console.log("reverse list", reverse(["a", "b", "c"]))