function solution(babbling) {
        return babbling
          .map((item) => item.replace(/aya|ye|woo|ma/g, ''))
          .filter((str) => !str).length;
      }