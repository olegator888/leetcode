package main

func canBeValid(s string, locked string) bool {
	lock := []int{}
	unlock := []int{}

	for i, c := range s {
		if locked[i] == '0' {
			unlock = append(unlock, i)
		} else if c == '(' {
			lock = append(lock, i)
		} else {
			if len(lock) > 0 {
				lock = lock[:len(lock)-1]
			} else if len(unlock) > 0 {
				unlock = unlock[:len(unlock)-1]
			} else {
				return false
			}
		}
	}

	for i := len(lock) - 1; i >= 0; i-- {
		if len(unlock) > 0 && unlock[len(unlock)-1] > lock[i] {
			unlock = unlock[:len(unlock)-1]
		} else {
			return false
		}
	}

	return len(unlock)%2 == 0
}
